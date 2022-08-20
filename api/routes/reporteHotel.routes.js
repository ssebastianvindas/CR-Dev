"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const ReporteHotel = require("../models/reporteHotel.model");

//
router.post("/registrar-reporteHotel", (req, res) => {
    let nuevaReporteHotel = new ReporteHotel({
        fecha: req.body.fecha,
        monto: req.body.monto

    });
    nuevaReporteHotel.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar el reporte del hotel",
                error,
            });
        } else {
            res.json({
                msj: "El reporte del hotel se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-reporteHotel", (req, res) => {
    ReporteHotel.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el reporte del hotel",
                error,
            });
        } else {
            res.json({
                msj: "Reporte del hotel listadas correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-reporteHotel", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-reporteHotel", (req, res) => {
    ReporteHotel.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: "No se pudo eliminar reporte de la veterinari",
                error,
            });
        } else {
            res.json({
                msj: "Reporte de la veterinari eliminada correctamente",
            });
        }
    });

});

module.exports = router;