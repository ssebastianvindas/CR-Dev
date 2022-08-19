"use strict";

const mongoose = require("mongoose");

const schemaVacunas = new mongoose.Schema({
    mascotaId: { type: String, required: true },
    fecha: { type: Date, required: true },
    vacuna: { type: String, required: true }
});
module.exports = mongoose.model("Vacunas", schemaVacunas, "vacunas");