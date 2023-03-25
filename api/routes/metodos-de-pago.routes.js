"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const MetodosDePago = require("../models/metodos-de-pago.model");

// ruta para registrar un usuario
router.post("/registrar-metodoDePago", (req, res) => {
  let nuevoMetodoDePago = new MetodosDePago({
    idUser: req.body.idUser,
    titular: req.body.titular,
    numerotarjeta: req.body.numerotarjeta,
    tipo: req.body.tipo,
    fechaExpiracion: req.body.fechaExpiracion,
    cvv: req.body.cvv,
  });
  nuevoMetodoDePago.save((error) => {
    if (error) {
      res.json({
        msj: "Ocurrió un error al registrar el método de pago",
        error,
      });
    } else {
      res.json({
        msj: "El método de pago se registró exitosamente",
        
      });
    }
  });
});
router.post("/obtener-tarjeta-usuario", (req, res) => {
  let usuario = req.body.usuario
  MetodosDePago.find({ idUser: usuario }, function(error, lista) {
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

// ruta para obtener la información de todo los usuarios
router.get("/obtener-metodoDePago", (req, res) => {
  MetodosDePago.find((error, lista) => {
    if (error) {
      res.json({
        msj: "No se pudo hacer el listado de usuarios",
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
router.put("/actualizar-metodoDePago", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-metodoDePago", (req, res) => {
  let body = req.body;
  MetodosDePago.remove({ _id: body._id }, (err, result) => {
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
