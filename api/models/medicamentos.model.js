"use strict";

const mongoose = require("mongoose");

const schemaMedicamento = new mongoose.Schema({
    mascotaId: { type: String, required: true },
    fecha: { type: Date, required: true },
    mascota: { type: String, required: true },
    doctor: { type: String, required: true },
    medicamento: { type: String, required: true },

});
module.exports = mongoose.model("Medicamentos", schemaMedicamento, "medicamentos");