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

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-mascota", (req, res) => {
    let body = req.body;
    Mascota.remove({ _id: body._id }, (err, result) => {
      if (err) {
        res.json({
          resultado: false,
          msj: "No se pudo eliminar los datos: ",
          err,
        });
      } else {
        res.json({
          resultado: true,
          msj: "Los datos se eliminarion de manera correcta",
          result,
        });
      }
    });
  });

module.exports = router;