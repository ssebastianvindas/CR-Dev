"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const ReporteVete = require("../models/reporteVete.model");

//
router.post("/registrar-reporteVete", (req, res) => {
    let nuevaReporteVete = new ReporteVete({
        fecha: req.body.fecha,
        monto: req.body.monto

    });
    nuevaReporteVete.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar el reporte de la veterinaria",
                error,
            });
        } else {
            res.json({
                msj: "El reporte de la veterinaria se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-reporteVete", (req, res) => {
    ReporteVete.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el reporte de la veterinaria",
                error,
            });
        } else {
            res.json({
                msj: "Reporte de la veterinaria listadas correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-reporteVete", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-reporteVete", (req, res) => {
    ReporteVete.deleteOne({ _id: req.body._id }, error => {
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