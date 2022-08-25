"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const CalificacionVet = require("../models/calificaciones-vet.model");

router.post("/registrar-calificacionVet", (req, res) => {
    let nuevaCalificacionVet = new CalificacionVet({
        nombreusuario: req.body.nombreusuario,
        nombreveterinario: req.body.nombreveterinario,
        calificacion: req.body.calificacion,
    });
    nuevaCalificacionVet.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar la calificacion",
                error,
            });
        } else {
            res.json({
                msj: "La calificacion se registró exitosamente",
            });
        }
    });
});

router.get("/obtener-calificacionVet", (req, res) => {
    CalificacionVet.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado de las citas",
                error,
            });
        } else {
            res.json({
                msj: "Citas listadas correctamente",
                lista,
            });
        }
    });
});

module.exports = router;