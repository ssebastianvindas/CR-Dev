"use strict";

const mongoose = require("mongoose");

const schemaCalificacionPet = new mongoose.Schema({
    nombreVeterinario: { type: String, required: true },
    nombreUsuario: { type: String, required: true },
    calificacion: { type: Number, required: true },
});

module.exports = mongoose.model("CalificacionPet", schemaCalificacionPet, "calificacionpets");