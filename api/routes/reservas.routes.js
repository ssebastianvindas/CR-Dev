"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Reservas = require("../models/reservas.model");

// ruta para registrar un usuario
router.post("/registrar-reservas", (req, res) => {
    let nuevaReserva = new Reservas({
        fechaEntrada: req.body.fechaEntrada,
        fechaSalida: req.body.fechaSalida,
        numMascotas: req.body.numMascotas,
        monto: req.body.monto


    });
    nuevaReserva.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar las reservaciones",
                error,
            });
        } else {
            res.json({
                msj: "La reserva se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-reservas", (req, res) => {
    Reservas.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado de las reservas",
                error,
            });
        } else {
            res.json({
                msj: "Reservas listadas correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-reservas", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-reservas", (req, res) => {
    Reservas.deleteOne((error) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer eliminar la reserva",
                error,
            });
        } else {
            res.json({
                msj: "Reserva eliminada correctamente",

            });
        }
    });
});

module.exports = router;