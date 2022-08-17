"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Medicamentos = require("../models/medicamentos.model");

// ruta para registrar un usuario
router.post("/registrar-medicamentos", (req, res) => {
    let nuevoMedicamento = new Medicamentos({
        mascotaId: req.body.mascotaId,
        fecha: req.body.fecha,
        mascota: req.body.mascota,
        doctor: req.body.doctor,
        medicamento: req.body.medicamento


    });
    nuevoMedicamento.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar la receta",
                error,
            });
        } else {
            res.json({
                msj: "La receta se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-medicamentos", (req, res) => {
    Medicamentos.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado de las recetas",
                error,
            });
        } else {
            res.json({
                msj: "Recetas listadas correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-medicamentos", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-medicamentos", (req, res) => {

});

module.exports = router;