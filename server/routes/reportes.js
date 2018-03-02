const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Response = require("../models/Response");
const Reporte = require("../models/Reporte")
const moment = require("moment");

// HACER COMPROBACIONES DE SI EL USER ES ADMIN O NO
router.get("/", (req, res, next) => {
  Reporte.find()
    .sort({ created_at: -1 })
    .populate("user_id")
    .populate("response_id")
    .then(reporte => {
      res
        .status(200)
        .json({ message: "Bandeja de entrada", reporte: reporte });
    })
    .catch(res.status(500).json({ message: "Oops, algo salió mal :(" }));
});

router.post("/status/:id", (req, res, next) => {
    const reporteId = req.params.id;
    const { status } = req.body;
    Idea.findByIdAndUpdate(reporteId, { status })
          .then(reporte => {
        res.status(200).json({ message: "Reporte actualizado correctamente" })
          })
      .catch(res.status(500).json({ message: "Oops, algo salió mal y el reporte no pudo ser cambiado :(" }))
  });

  router.post("/create/:id", (req, res, next) => {
    const response_id = req.params.id;
    const user_id = req.locals.user._id; 
    const mensaje = req.body.mensaje;
    const updates = {response_id,user_id,mensaje}
    
    const newReporte = new Reporte(updates);
      newReporte.save(err => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: "Oops, algo salió mal :(" });
        } else {
          return res.status(200).json({ message: "Reporte enviado correctamente" });
        }
      });
  });

module.exports = router;
