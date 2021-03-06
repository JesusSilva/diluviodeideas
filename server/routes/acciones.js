const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");
const User = require("../models/User");
const Favoritos = require("../models/Favoritos");
const Response = require("../models/Response");
const Colaboracion = require("../models/Colaboracion")
const myIdeas = require("../middlewares/myIdeas");
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


// C => Añadir colaboraciones
router.post("/colaborar/:id", (req, res, next) => {
	const idea_id = req.params.id;
	const colaborador = res.locals.user._id;
	let colaboradorName;
	let author;
	let authorMail;
	let idea;

	User.findById(colaborador)
	.then(user =>{colaboradorName=user.name})
	.catch(e => {res.status(500).json({ message: "no asignas bien el user.name a colaboradorName"})})

	Idea.findById(idea_id)
	.populate('user_id')
	.then(idea => {
		ideaTitle = idea.title;
		author = idea.user_id._id;
		authorMail = idea.user_id.email;
		mailOptions.to = authorMail;
		mailOptions.subject = "Un usuario quiere participar en tu idea";
		mailOptions.html = (`El usuario <b>${colaboradorName}</b> quiere colaborar en <b>${ideaTitle}</b>,<br> accede a: <a href=http://diluviodeideas.com>Diluvio de Ideas</a> para revisar tus colaboraciones.`)
		
		const colaboraciones = { idea_id,colaborador,author };
		const newColaboracion = new Colaboracion(colaboraciones);
		newColaboracion.save()
		//Colaboracion.create(colaboraciones)
		.then(colaboracion => {
			Idea.findById(idea_id)
				.then( idea => {
					Idea.findByIdAndUpdate(idea._id,{ $push: { pending: colaboracion._id } },{new: true})
					.then(e => {
						console.log(e)
					})
					})
				.catch(err => { console.log(err); res.status(500).json({ message: "no actualizas bien el array pending con el colaborador"})})

				transporter.sendMail(mailOptions, function (error, info) {
					if (error) {console.log(error);} 
					else {console.log('Email enviado: ' + info.response);}
					return res
						.status(200)
						.json({ colaboracion: colaboracion, message: "correo enviado correctamente" })
					})
				})
				})
	.catch(e => {
		console.log(e);
		res.status(500).json({ message: "ey polluelo revisa el codigo que fallas en algo"})
	})
});


// U => Actualizar colaboracion
router.post("/colaborar-update/:id", (req, res, next) => {

	
})


// D => Eliminar colaboracion
router.post("/colaborar-remove/:id", (req, res, next) => {
	const user_id = res.locals.user._id;
	const colaboracion_id = req.params.id;
	Colaboracion.findByIdAndRemove(colaboracion_id)
	.then(colaboracion => { 
		Idea.findByIdAndUpdate(colaboracion.idea_id,{ $pop: { pending: colaboracion._id } },{new: true})})
})


// C => Añadir fav
router.post("/fav/:id", (req, res, next) => {
	const user_id = res.locals.user._id;
	const idea_id = req.params.id;
	const fav = {user_id,idea_id}

	const newFavorito = new Favoritos(fav);
	newFavorito.save()
	.then(fav => { User.findByIdAndUpdate(user_id,{ $push: { favs: fav._id } },{new: true})})
	.catch(err => { console.log(err); res.status(500).json({ message: "no actualizas bien el array favs con el fav.id"}) })
})


// D => Eliminar fav
router.post("/fav-update/:id", (req, res, next) => {
	const user_id = res.locals.user._id;
	const fav_id = req.params.id;
	Favoritos.findByIdAndRemove(fav_id)
	.then(fav => { User.findByIdAndRemove(user_id,{ favs: fav._id },{new: true})})
	.catch(err => { console.log(err); res.status(500).json({ message: "no eliminas bien el fav"}) })
})

module.exports = router;