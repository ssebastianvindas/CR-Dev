"use strict";

const mongoose = require("mongoose");

const schemaTratamientos = new mongoose.Schema({
    mascotaId: { type: String, required: false },
    fecha: { type: Date, required: false },
    tratamiento: { type: String, required: false }
});
module.exports = mongoose.model("Tratamientos", schemaTratamientos, "tratamientos");