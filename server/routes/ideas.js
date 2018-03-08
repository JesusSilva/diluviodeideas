const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");
const User = require("../models/User");
const Response = require("../models/Response");
const Colaboracion = require("../models/Colaboracion")
const myIdeas = require("../middlewares/myIdeas");
const moment = require("moment");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/../uploads" });
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL 
  }
});

let mailOptions = {
  from: '"Diluvio de Ideas 💡🧠" <process.env.USER_EMAIL>', // sender address,
  to: '',
  subject: '',
  html: ''
};


// ¿¿¿ ???
router.get("/new", (req, res, next) => {
  res.status(200).json({ message: "Bienvenido a /ideas/new" });
});


// C => Crear una nueva idea
router.post("/new", upload.single("imagen"), (req, res, next) => {
  const { title, mensaje, privacy, colaboracion } = req.body;
  const user_id = res.locals.user._id;
  let imagen;
  if (req.file) {
    updates = { title, mensaje, imagen: req.file.filename, privacy,user_id };
  } else {
    updates = { title, mensaje, privacy,user_id };
  }
  if (title === "" || mensaje === "" || privacy === "") {
    return res
      .status(500)
      .json({ message: "Rellene todos los campos por favor!" });
  }

  Idea.findOne({ title: title })
    .then(idea => {
      if (idea !== null) {
        return res.status(500).json({ message: "El titulo ya existe" });
      }

      const newIdea = new Idea(updates);
      newIdea.save()
      .then(idea => {
        console.log("El id de tu idea es = ",idea)
        User.findByIdAndUpdate(user_id,{ $push: { ideas: idea._id } },{new: true})
        .then(idea => {
          return res.status(200).json({ message: "joputa has añadido una respuesta al array del user", idea:idea })
        });
      })
    })
});


// R => Leer todas las ideas
router.get("/", (req, res, next) => {
  Idea.find({ privacy: false })
    .sort({ created_at: -1 })
    .populate("user_id")
    .then(ideas => {
      res.status(200).json(ideas);
    });
});


// R => Leo los detalles de la idea
router.get("/:id", (req,res,next) => {
  const idea_id = req.params.id;
  Idea.findById(idea_id)
  .populate('response_id')
    .then(idea => { 
      return res
      .status(200)
      .json({ idea: idea, message: "Mostrando detalles de la idea" })
      .catch(res.status(500).json({ message: "oh oh mal rollo"}))
    })
})


// R => Devuelvo los valores a editar
router.get("/edit/:id", (req, res) => {
	const ideaId = req.params.id;
  Idea.findById(ideaId).then(idea => {
    return res
      .status(200)
      .json({ idea: idea, message: "Idea mostrada correctamente" })
      .catch(err => next(err));
  });
});


// U => Actualizo la idea
router.put("/edit/:id", (req, res, next) => {
  const ideaId = req.params.id;
  const {title, mensaje, imagen, privacy } = req.body;
  
  Idea.findByIdAndUpdate(ideaId, { mensaje, imagen, privacy, title })
    .then(idea => {
      res.status(200).json({ idea })
    })
    .catch(err => next(err));
});


// C => Creo una respuesta
router.post("/new-response/:id", (req, res, next) => {
  const mensaje = req.body.respuesta;
  const idea_id = req.params.id;
  const user_id = res.locals.user._id;
  const respuesta = { user_id,idea_id,mensaje };
  const newResponse = new Response(respuesta);
  newResponse.save()
    .then(respuesta => {
      
      const PromiseIdea = Idea.findByIdAndUpdate(idea_id,{ $push: { response_id: respuesta._id } },{new: true})
      const PromiseUser = User.findByIdAndUpdate(user_id,{ $push: { response: respuesta._id } },{new: true})
    
      Promise.all([PromiseIdea,PromiseUser])
      .then(x => { res.status(200).json(x)})
      .catch(err => {console.log(err)})
    })    
});


// U => Actualizo una respuesta
router.put("/update-response/:id", (req, res, next) => {
  const responseId = req.params.id;
  const mensaje = req.body.mensaje;
  console.log("Este es tu puto mensaje: ",mensaje);
  console.log("Este es tu puto id de la respuesta: ",responseId);
  Response.findByIdAndUpdate(responseId, {mensaje})
    .then(r => res
      .status(200)
      .json({ res })
      .catch(err => next(err)))
});


// //search
// router.get('/search/:term', (req, res, next) => {
//   let term = req.params.term;
//   console.log(term)
//   let rg = new RegExp(term, 'i');
//   Ticket.find({ description: rg }).then(results => {
//       console.log(results)
//     res.render('search', { term:term,results: results })
//   })
// })


module.exports = router;
