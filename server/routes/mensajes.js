const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Mensaje = require("../models/Mensaje");
const moment = require("moment");
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
  const emisor = res.locals.user._id;
  console.log(res.locals.user)

  Mensaje.find({emisor:emisor})
    .sort({ created_at: -1 })
    .populate("emisor")
    .populate("receptor")
    .then(mensajes => {
      res
        .status(200)
        .json({ message: "Bandeja de entrada", mensajes: mensajes });
    });
});

router.get("/salida", (req, res, next) => {
  const emisor = res.locals.user._id;
  
  Mensaje.find({_id:emisor})
    .sort({ created_at: -1 })
    .populate("emisor")
    .populate("receptor")
    .then(mensajes => {
      res
        .status(200)
        .json({ message: "Bandeja de entrada", mensajes: mensajes });
    });
});

router.post("/salida", (req, res, next) => {
  let {asunto,receptorUsername,contenido} = req.body;
  console.log("==================================================")
  console.log(req.body);
  console.log("==================================================")
  console.log(receptorUsername,"==========> ESTE ES EL USERNAME DEL RECEPTOR")
  const emisor = res.locals.user._id;
  console.log(emisor,"======> ESTE ES EL ID DEL USER");
  let emisorName;

  User.findById(emisor)
  .then(user =>{emisorName=user.name; console.log(emisorName,"======> ESTE ES EL USERNAME")})
  .catch(e => {
    console.log(e);
    res.status(500).json({ message: "ey polluelo revisa el codigo que fallas en algo"})
  })

	User.findOne({username:receptorUsername})
		.then(user =>{
      console.log(user);
      receptor = user._id;
      receptorMail = user.email;

      const mensaje = { asunto,contenido,emisor,receptor };

      mailOptions.to = receptorMail;
      mailOptions.subject = asunto;
      mailOptions.html = (`El usuario <b>${emisorName}</b> te ha enviado un mensaje privado,<br> para poder verlo, accede a: <a href=http://diluviodeideas.com>Diluvio de Ideas</a>`)
      
      const newMensaje = new Mensaje(mensaje);
      console.log("EL MENSAJE CONTIENE ========>",mensaje)
      newMensaje.save()
        .then(mensaje => {
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

router.get("/delete/:id", (req, res) => {
  const mensajeId = req.params.id;
  Mensaje.findByIdAndRemove(mensajeId)
    .then(m => { res.status(200).json({ status: "mp eliminado" }) })
    .catch(err => { next(err) });
});

module.exports = router;
