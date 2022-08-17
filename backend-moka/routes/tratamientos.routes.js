"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Tratamientos = require("../models/tratamientos.model");

// ruta para registrar un usuario
router.post("/registrar-tratamientos", (req, res) => {
    let nuevoTratamiento = new Tratamientos({
        mascotaId: req.body.mascotaid,
        fecha: req.body.fecha,
        tratamiento: req.body.tratamiento,


    });
    nuevoTratamiento.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar el tratamiento",
                error,
            });
        } else {
            res.json({
                msj: "El tratamiento se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-tratamientos", (req, res) => {
    Tratamientos.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado del tratamiento",
                error,
            });
        } else {
            res.json({
                msj: "Tratamiento listado correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-tratamientos", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-tratamientos", (req, res) => {

});

module.exports = router;