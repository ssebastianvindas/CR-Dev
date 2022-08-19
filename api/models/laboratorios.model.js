"use strict";

const mongoose = require("mongoose");

const schemaLab = new mongoose.Schema({
    mascotaId: { type: String, required: true },
    fecha: { type: Date, required: true },
    mascota: { type: String, required: true },
    owner: { type: String, required: true },
    examen: { type: String, required: true },
    resultados: { type: String, required: true },
    doctor: { type: String, required: false }

});
module.exports = mongoose.model("Laboratorios", schemaLab, "laboratorios");