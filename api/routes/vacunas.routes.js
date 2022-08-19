"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Vacunas = require("../models/vacunas.model");

// ruta para registrar un usuario
router.post("/registrar-vacunas", (req, res) => {
    let nuevaVacuna = new Vacunas({
        mascotaId: req.body.mascotaId,
        fecha: req.body.fecha,
        vacuna: req.body.vacuna


    });
    nuevaVacuna.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar las vacunas",
                error,
            });
        } else {
            res.json({
                msj: "La vacuna se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-vacunas", (req, res) => {
    Vacunas.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado de vacunas",
                error,
            });
        } else {
            res.json({
                msj: "Vacunas listadas correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-vacunas", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-vacunas", (req, res) => {

});

module.exports = router;