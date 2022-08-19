"use strict";

const mongoose = require("mongoose");

const schemaUsuario = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  usuario: { type: String, required: true, unique: true },
  numero: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contrasenna: { type: String, required: true },
  foto: { type: String, required: false },
  rol: { type: Number, required: true },
  estado: { type: Number, required: true },
});

// rol
// 1 ----> admin
// 2 ----> secretaria
// 3 ----> veterinario
// 4 ----> cliente

// estado: pueden haber mas
// 1 activo
// 2 inactivo
module.exports = mongoose.model("Usuario", schemaUsuario, "usuarios");
