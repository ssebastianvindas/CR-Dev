"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Cita = require("../../../../Desktop/backend-moka/backend-moka/models/citas.model");

// ruta para registrar un usuario
router.post("/registrar-cita", (req, res) => {
    let nuevaCita = new Cita({
        nombremascota: req.body.nombremascota,
        nombreduenno: req.body.nombreduenno,
        procedimiento: req.body.procedimiento,
        fecha: req.body.fecha,
        hora: req.body.hora,
    });
    nuevaCita.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar la cita",
                error,
            });
        } else {
            res.json({
                msj: "La cita se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-citas", (req, res) => {
    Cita.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado de usuario",
                error,
            });
        } else {
            res.json({
                msj: "Usuario listados correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-cita", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-cita", (req, res) => {

});

module.exports = router;