"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Expediente = require("../models/expedientes.model");

// ruta para registrar un usuario
router.post("/registrar-expediente", (req, res) => {
    let nuevoExpediente = new Expediente({
        fecha: req.body.fecha,
        mascota: req.body.mascota,
        mascotaId: req.body.mascotaId,
        owner: req.body.owner,
        ownerId: req.body.ownerId,
        veterinario: req.body.veterinario,
        quejaprincipal: req.body.quejaprincipal,
        tos: req.body.tos,
        resfrio: req.body.resfrio,
        fiebre: req.body.fiebre,
        brucelosis: req.body.brucelosis,
        distemper: req.body.distemper,
        carbunco: req.body.carbunco,
        hongos: req.body.hongos,
        moquillo: req.body.moquillo,
        viriosis: req.body.viriosis,
        parvo: req.body.parvo,
        hepatitis: req.body.hepatitis,
        laringo: req.body.laringo,
        gastro: req.body.gastro,
        rabia: req.body.rabia,
        lepto: req.body.lepto,
        tp: req.body.tp,
        parasitos: req.body.parasitos,
        lehismania: req.body.lehismania,
        filarias: req.body.filarias,
        presionarterial: req.body.presionarterial,
        pulso: req.body.pulso,
        temperatura: req.body.temperatura,
        peso: req.body.peso,
        talla: req.body.talla,
        edad: req.body.edad,
        radiografia: req.body.radiografia

    });
    nuevoExpediente.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar el expediente",
                error,
            });
        } else {
            res.json({
                msj: "El expediente se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-expediente", (req, res) => {
    Expediente.find((error, lista) => {
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
router.put("/actualizar-expediente", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-expediente", (req, res) => {

});

module.exports = router;