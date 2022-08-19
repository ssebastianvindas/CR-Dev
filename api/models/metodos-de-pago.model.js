"use strict";

const mongoose = require("mongoose");

const schemaMetodoPago = new mongoose.Schema({
  titular: { type: String, required: false },
  numerotarjeta: { type: String, required: true, unique: true },
  tipo: { type: String, required: true },
  fechaExpiracion: { type: String, required: true },
  cvv: { type: String, required: true, unique: true },
});
module.exports = mongoose.model(
  "MetodosDePago",
  schemaMetodoPago,
  "metodosDePago"
);
