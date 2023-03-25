"use strict";

const mongoose = require("mongoose");

const schemaCalificacionVet = new mongoose.Schema({
    nombreusuario: { type: String, required: true },
    nombreveterinario: { type: String, required: true },
    calificacion: { type: Number, required: true },
});

module.exports = mongoose.model("CalificacionVet", schemaCalificacionVet, "calificacionvets");