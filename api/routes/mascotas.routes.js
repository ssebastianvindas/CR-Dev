"use strict";
//let user = window.localStorage.getItem('usuarioConectado');
const express = require("express");
const { default: mongoose, model } = require("mongoose");
const router = express.Router();
const Mascota = require("../models/mascotas.model");

router.post("/registrar-mascota", (req, res) => {
    let nuevaMascota = new Mascota({
        petUser: req.body.petUser,
        petName: req.body.petName,
        petPhoto: req.body.petPhoto,
        petCare: req.body.petCare,
    });
    nuevaMascota.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrio un error al registrar la mascota",
                error,
            });
        } else {
            res.json({
                msj: "La mascota se registró exitosamente",
            });
        }
    });
});

router.post("/obtener-mascota-usuario", (req, res) => {
    let usuario = req.body.usuario
    Mascota.find({ petUser: usuario }, function(error, lista) {
        if (error) {
            res.json({
                msj: "No se encontraron mascotas",
                error,
            });
        } else {
            res.json({
                msj: "Mascotas listadas",
                lista,
            });
        }
    });
});

router.get("/obtener-mascotas", (req, res) => {
    Mascota.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se encontraron mascotas",
                error,
            });
        } else {
            res.json({
                msj: "Mascotas listadas",
                lista,
            });
        }
    });
});

module.exports = router;