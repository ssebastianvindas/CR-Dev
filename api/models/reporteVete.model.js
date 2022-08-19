"use strict";

const mongoose = require("mongoose");

const schemaReporte = new mongoose.Schema({
    fecha: { type: Date, required: true },
    monto: { type: Number, required: true },
});

module.exports = mongoose.model("Reporte", schemaReporte, "reporte");