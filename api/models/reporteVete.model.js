"use strict";

const mongoose = require("mongoose");

const schemaReporteVete = new mongoose.Schema({
    fecha: { type: Date, required: true },
    monto: { type: Number, required: true },
});

module.exports = mongoose.model("ReporteVete", schemaReporteVete, "reportevete");