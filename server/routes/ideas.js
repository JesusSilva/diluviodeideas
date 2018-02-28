const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");
const User = require("../models/User");
const Response = require("../models/Response");
const myIdeas = require("../middlewares/myIdeas");
const moment = require("moment");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/../uploads" });

router.get("/", (req, res, next) => {
  Idea.find({ privacy: false })
    .sort({ created_at: -1 })
    .populate("user_id")
    .then(ideas => {
      res.status(200).json(ideas);
    });
});

router.get("/new", (req, res, next) => {
  // Añadir isLoggedIn, preguntar a Victor que puedo utilizar
  res.status(200).json({ message: "Bienvenido a /ideas/new" });
});

router.post("/new", upload.single("imagen"), (req, res, next) => {
  const { title, mensaje, privacy } = req.body;
  let imagen;
  if (req.file) {
    updates = { title, mensaje, imagen: req.file.filename, privacy, user_id:"5a957a344c6e5d407ffce160" };
  } else {
    updates = { title, mensaje, privacy, user_id:"5a957a344c6e5d407ffce160" };
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
  const {mensaje, imagen, privacy } = req.body;
  Idea.findByIdAndUpdate(ideaId, { mensaje, imagen, privacy })
		.then(idea => {
			// devolver un newIdea para mostrar vista previa
      res.status(200).json({ message: "Idea actualizada correctamente" })
		})
    .catch(err => next(err));
});

router.post("/new-response/:id", (req, res, next) => {
  
  const mensaje = req.body.mensaje;
  const idea_id = req.params.id;
  const user_id = res.locals.user;
  console.log("============================================================")
  console.log("EL USER ID ES: " , user_id);
  console.log("============================================================")
  const respuesta = { user_id,idea_id,mensaje };
  
  const newResponse = new Response(respuesta);
  newResponse.save()
    .then(respuesta => {
      // TENGO QUE HACER $PUSH PARA INSERTAR EL ID DE ESTA RESPUESTA A LA IDEA
      return res
          .status(200)
          .json({ respuesta: respuesta, message: "respuesta creada correctamente" })
          .catch(res.status(500).json({ message: "oh oh mal rollo"}))
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
