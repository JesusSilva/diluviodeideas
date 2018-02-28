const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Mensaje = require("../models/Mensaje");
const moment = require("moment");

router.get("/entrada", (req, res, next) => {
	const emisor = res.locals.user;
	console.log("============================================================")
	console.log("EL USER ID ES: " , emisor);
	console.log("============================================================")
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
  let {asunto,contenido,receptor} = req.body;
  const emisor = res.locals.user;
  console.log("============================================================")
  console.log("EL USER ID ES: " , emisor);
	console.log("============================================================")
	User.findOne({username:receptor})
		then(user =>{
			receptor = user._id;
		})
		.catch(e => {
      console.log(e);
      res.status(500).json(e)
    }) 

  const mensaje = { asunto,contenido,emisor,receptor };
  const newMensaje = new Mensaje(mensaje);
  newMensaje.save()
    .then(mensaje => {
      return res
          .status(200)
          .json({ mensaje: mensaje, message: "mp enviado correctamente" })
          .catch(res.status(500).json({ message: "ey polluelo revisa el codigo que fallas en algo"}))
    })
});

router.get("/delete/:id", (req, res) => {
  const mensajeId = req.params.id;
  Mensaje.findByIdAndRemove(mensajeId)
    .then(m => { res.status(200).json({ status: "mp eliminado" }) })
    .catch(err => { next(err) });
});

module.exports = router;
