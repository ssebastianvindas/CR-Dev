"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Usuario = require("../models/usuarios.model");

// ruta para registrar un usuario
router.post("/registrar-usuario", (req, res) => {
  let nuevoUsuario = new Usuario({
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    usuario: req.body.usuario,
    numero: req.body.numero,
    correo: req.body.correo,
    contrasenna: req.body.contrasenna,
    foto: req.body.foto,
    rol: req.body.rol,
    estado: 1,
  });
  nuevoUsuario.save((error) => {
    if (error) {
      res.json({
        msj: "Ocurrió un error al registrar el usuario",
        error,
      });
    } else {
      res.json({
        msj: "El usuario se registró exitosamente",
      });
    }
  });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-usuarios", (req, res) => {
  Usuario.find((error, lista) => {
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
router.put("/actualizar-usuario", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-usuario", (req, res) => {
  let body = req.body;
  Usuario.remove({ _id: body._id }, (err, result) => {
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
