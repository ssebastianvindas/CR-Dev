"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Laboratorios = require("../models/laboratorios.model");

// ruta para registrar un usuario
router.post("/registrar-laboratorios", (req, res) => {
    let nuevoLaboratorio = new Laboratorios({
        mascotaId: req.body.mascotaId,
        fecha: req.body.fecha,
        mascota: req.body.mascota,
        owner: req.body.owner,
        examen: req.body.examen,
        resultados: req.body.resultados,
        doctor: req.body.doctor


    });
    nuevoLaboratorio.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar el laboratorio",
                error,
            });
        } else {
            res.json({
                msj: "El laboratorio se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-laboratorios", (req, res) => {
    Laboratorios.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado del laboratorio",
                error,
            });
        } else {
            res.json({
                msj: "Laboratorio listado correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-laboratorios", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-laboratorios", (req, res) => {

});

module.exports = router;