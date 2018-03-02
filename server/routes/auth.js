const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("server:auth");
const passport = require('passport')
const multer = require("multer");
const upload = multer({ dest: __dirname + "/../uploads" });

let loginPromise = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, e => e? reject(e):resolve(user))
  })
}

/* SIGNUP */
router.post('/signup', (req, res, next) => {
  const {username,name,email,espec,password,confirm_password,about_me,avatar} = req.body;
  console.log(req.body)
  if (!username || !password) return res.status(400).json({ message: 'Provide username and password' })
  User.findOne({ username }, '_id')
    .then(foundUser =>{
      if (foundUser) return res.status(400).json({ message: 'The username already exists' });
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      if (password !== confirm_password ) return res.status(500).json({ message: 'Passwords do not match' });

      let updates;
      if (req.file) { updates = { username,name,email,espec,password: hashPass,about_me, avatar: req.file.filename } }
      else {updates = {username,name,email,espec,password: hashPass,about_me}}
      
      const theUser = new User(updates)
    
    return theUser.save()
    .then(user => loginPromise(req,user))
    .then(user => {
      debug(`Registered user ${user._id}. Welcome ${user.username}`);
      res.status(200).json(req.user)
    }) 
  })
    .catch(e => {
      console.log(e);
      res.status(500).json(e)
    }) 
});


router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    if (!theUser) return res.status(401).json(failureDetails);
    loginPromise(req,theUser)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: 'Something went wrong' }));
  })(req, res, next);
});

router.get('/profile/:id', (req, res, next) => {
  const userId = req.params.id;
  User.findOne({ _id: userId })
    .then(user => res.status(200).json({message: 'Mostrando profile', user:user}))
    .catch(e => res.status(500).json({ message: 'Imposible mostrar el perfil' }));
});

router.get('/edit/:id', (req, res, next) => {
  const userId = req.params.id;
  User.find({ _id: userId })
    .then(user => res.status(200).json({message: 'Mostrando edit profile', user:user}))
    .catch(e => res.status(500).json({ message: 'Imposible mostrar el perfil' }));
});

router.post('/edit/:id', (req, res, next) => {
  const userId = req.params.id
  const {name,email,espec,password,confirm_password,about_me,avatar} = req.body;
  const salt = bcrypt.genSaltSync(10);
  
  if (password !== confirm_password && password !=="") return res.status(500).json({ message: 'Passwords do not match' });
  console.log("===========================================================");
  console.log("tu password de mierda es: ",password);
  console.log("===========================================================");

  let updates;
  if (req.file) { updates = { name,email,espec,about_me, avatar: req.file.filename } 
    if (password !== '') {
      const hashPass = bcrypt.hashSync(req.body.password, salt);
      updates = { name,email,espec,password:hashPass,about_me, avatar: req.file.filename }
    }
  }else {updates = { name,email,espec,about_me }
  if (password !== '') {
    const hashPass = bcrypt.hashSync(req.body.password, salt);
    updates = { name,email,espec,password:hashPass,about_me }
  }
  }
  console.log("updates tiene: ",updates)
  
  User.findByIdAndUpdate(userId, updates, {new: true, runValidators: true})
    .then(user => {
      console.log("ESTE ES EL USER: ", user)
      res.status(200).json({ message: 'Perfil editado correctamente' });
    })
    .catch(err => next(err));
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;