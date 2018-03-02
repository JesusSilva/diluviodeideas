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

router.get("/", (req, res, next) => {
  Idea.find({ privacy: false })
    .sort({ created_at: -1 })
    .populate("user_id")
    .then(ideas => {
      res.status(200).json(ideas);
    });
});

router.post("/colaborar/:id", (req, res, next) => {
  const colaborador = res.locals.user._id;
  const author = req.params.id;
  let colaboradorName;
  let {colaboracion} = req.body;
  const emisor = res.locals.user._id;

  User.findById(emisor)
  .then(user =>{colaboradorName=user.name})
  .catch(e => {
    console.log(e);
    res.status(500).json({ message: "ey polluelo revisa el codigo que fallas en algo"})
  })

	User.findOne({_id:author})
		.then(user =>{
      author = user._id;
      authorMail = user.email;

      const colaboraciones = { colaboracion,emisor,author };

      mailOptions.to = authorMail;
      mailOptions.subject = asunto;
      mailOptions.html = (`El usuario <b>${colaboradorName}</b> quiere colaborar en ${s},<br>, accede a: <a href=http://diluviodeideas.com>Diluvio de Ideas</a> para revisar tus colaboraciones.`)
      
      const newColaboracion = new Colaboracion(colaboraciones);
      
      newColaboracion.save()
        .then(colaboracion => {
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {console.log(error);} 
            else {console.log('Email enviado: ' + info.response);}
          })
          return res
              .status(200)
              .json({ mensaje: mensaje, message: "mp enviado correctamente" })
        })
		})
		.catch(e => {
      console.log(e);
      res.status(500).json({ message: "ey pollueloooooo revisa el codigo que fallas en algo"})
    }) 
});

router.get("/new", (req, res, next) => {
  res.status(200).json({ message: "Bienvenido a /ideas/new" });
});

router.post("/new", upload.single("imagen"), (req, res, next) => {
  const { title, mensaje, privacy } = req.body;
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
      newIdea.save(err => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: "Oops, algo salió mal :(" });
        } else {
          return res.status(200).json({ message: "Idea creada correctamente" });
        }
      });
    })
    .catch(err => next(err));
});

router.get("/edit/:id", (req, res) => {
	const ideaId = req.params.id;
  Idea.findById(ideaId).then(idea => {
    return res
      .status(200)
      .json({ idea: idea, message: "Idea mostrada correctamente" })
      .catch(err => next(err));
  });
});

router.post("/edit/:id", (req, res, next) => {
  const ideaId = req.params.id;
  const {title, mensaje, imagen, privacy } = req.body;
  Idea.findOne( {title:title} )
    .then(idea => {
      console.log(idea)
      if (idea != null ) {
        return res.status(500).json({ message: "El titulo ya existe" });
      }
      Idea.findByIdAndUpdate(ideaId, { mensaje, imagen, privacy, title })
        .then(idea => {
          console.log("holiiis")
          res.status(200).json({ message: "Idea actualizada correctamente" })
        })
        .catch(err => next(err));
    })
    .catch (err => {})
});

router.post("/new-response/:id", (req, res, next) => {
  
  const mensaje = req.body.mensaje;
  const idea_id = req.params.id;
  const user_id = res.locals.user._id;
  console.log("============================================================")
  console.log("EL USER ID ES: " , user_id);
  console.log("============================================================")
  const respuesta = { user_id,idea_id,mensaje };
  
  const newResponse = new Response(respuesta);
  newResponse.save()
    .then(respuesta => {
      console.log("EL ID RESPUESTA ES: ", respuesta._id)
      console.log("============================================================")
      Idea.findByIdAndUpdate(idea_id,{ $push: { response_id: respuesta._id } },{new: true})
      .then( i => {
        console.log("ENTRO AQUI")
        return res
        .status(200)
        .json({ respuesta: respuesta, message: "respuesta creada correctamente" })
        .catch(res.status(500).json({ message: "oh oh mal rollo"}))
      })

      
    })    
});


router.post("/update-response/:id", (req, res, next) => {
  const responseId = req.params.id;
  const {mensaje} = req.body;
  Ticket.findByIdAndUpdate(responseId, {mensaje})
    .then(r => res
      .status(200)
      .json({ idea: idea, message: "respuesta creada correctamente" })
      .catch(err => next(err)))
});

router.get("/delete-response/:question/:answers", (req, res) => {
  const questionId = req.params.question;
  const responseId = req.params.answers;
  Response.findByIdAndRemove(responseId)
    .then(r => { res.json({ status: "eliminada" }) })
    .catch(err => { next(err) });
});

module.exports = router;

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