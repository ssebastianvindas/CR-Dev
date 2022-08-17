"use strict";

const mongoose = require("mongoose");

const schemaCita = new mongoose.Schema({
    nombremascota: { type: String, required: true },
    nombreduenno: { type: String, required: true },
    procedimiento: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    doctor: { type: String, required: true },
    estado: { type: String, required: true },
});
module.exports = mongoose.model("Cita", schemaCita, "citas");