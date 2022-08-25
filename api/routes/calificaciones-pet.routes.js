"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const CalificacionPet = require("../models/calificaciones-pet.model");

router.post("/registrar-calificacionPet", (req, res) => {
    let nuevaCalificacionPet = new CalificacionPet({
        nombreVeterinario: req.body.nombreVeterinario,
        nombreUsuario: req.body.nombreUsuario,
        calificacion: req.body.calificacion,
    });
    nuevaCalificacionPet.save((error) => {
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
    CalificacionPet.find((error, lista) => {
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