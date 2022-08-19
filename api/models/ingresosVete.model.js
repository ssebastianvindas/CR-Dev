"use strict";

const mongoose = require("mongoose");

const schemaIngresosVete = new mongoose.Schema({
    fecha: { type: Date, required: true },
    monto: { type: Number, required: true }
});
module.exports = mongoose.model("IngresosVete", schemaIngresosVete, "ingresosvete");