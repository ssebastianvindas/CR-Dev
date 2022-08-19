"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const IngresosVete = require("../models/ingresosVete.model");

// ruta para registrar un usuario
router.post("/registrar-ingresosVete", (req, res) => {
    let nuevoIngresoVete = new IngresosVete({
        fecha: req.body.fecha,
        monto: req.body.monto

    });
    nuevoIngresoVete.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar el ingreso",
                error,
            });
        } else {
            res.json({
                msj: "El ingreso se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-ingresosVete", (req, res) => {
    IngresosVete.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado de los ingresos",
                error,
            });
        } else {
            res.json({
                msj: "Ingresos listadas correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-ingresosVete", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-ingresosVete", (req, res) => {
    IngresosVete.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: "No se pudo eliminar el ingreso",
                error,
            });
        } else {
            res.json({
                msj: "El ingreso fue eliminado correctamente",
            });
        }
    });

});

module.exports = router;