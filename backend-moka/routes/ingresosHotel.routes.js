"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const IngresosHotel = require("../models/ingresosHotel.model");

// ruta para registrar un usuario
router.post("/registrar-ingresosHotel", (req, res) => {
    let nuevoIngresoHotel = new IngresosHotel({
        fecha: req.body.fecha,
        monto: req.body.monto

    });
    nuevoIngresoHotel.save((error) => {
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
router.get("/obtener-ingresosHotel", (req, res) => {
    IngresosHotel.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado de los ingresos",
                error,
            });
        } else {
            res.json({
                msj: "Ingresos listados correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-ingresosHotel", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-ingresosHotel", (req, res) => {
    Cita.deleteOne({ _id: req.body._id }, error => {
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