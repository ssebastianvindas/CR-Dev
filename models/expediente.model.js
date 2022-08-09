"use strict";

const mongoose = require("mongoose");

const schemaExpediente = new mongoose.Schema({
    fecha: { type: Date, required: true },
    mascota: { type: String, required: true },
    mascotaId: { type: Number, required: true, unique: true },
    owner: { type: String, required: true },
    ownerId: { type: Number, required: true, unique: true },
    veterinario: { type: String, required: true },
    quejaprincipal: { type: String, required: true },
    tos: { type: Boolean, required: false },
    resfrio: { type: Boolean, required: false },
    fiebre: { type: Boolean, required: false },
    brucelosis: { type: Boolean, required: false },
    distemper: { type: Boolean, required: false },
    carbunco: { type: Boolean, required: false },
    hongos: { type: Boolean, required: false },
    moquillo: { type: Boolean, required: false },
    viriosis: { type: Boolean, required: false },
    parvo: { type: Boolean, required: false },
    hepatitis: { type: Boolean, required: false },
    laringo: { type: Boolean, required: false },
    gastro: { type: Boolean, required: false },
    rabia: { type: Boolean, required: false },
    lepto: { type: Boolean, required: false },
    tp: { type: Boolean, required: false },
    parasitos: { type: Boolean, required: false },
    lehismania: { type: Boolean, required: false },
    filarias: { type: Boolean, required: false },
    presionarterial: { type: String, required: true },
    pulso: { type: String, required: true },
    temperatura: { type: String, required: true },
    peso: { type: String, required: true },
    talla: { type: String, required: true },
    edad: { type: String, required: true },
    radiografia: { type: String, required: true },



});


module.exports = mongoose.model("Expediente", schemaExpediente, "expedientes");