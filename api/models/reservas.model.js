"use strict";

const mongoose = require("mongoose");

const schemaReserva = new mongoose.Schema({
    usuario: { type: String, required: true },
    mascota: { type: String, required: true },
    fechaEntrada: { type: Date, required: true },
    fechaSalida: { type: Date, required: true },
    numMascotas: { type: String, required: true },
    monto: { type: Number, required: true }

});

module.exports = mongoose.model("Reserva", schemaReserva, "reservas");