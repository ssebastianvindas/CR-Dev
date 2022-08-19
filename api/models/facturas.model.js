"use strict";

const mongoose = require("mongoose");

const schemaFacturas = new mongoose.Schema({
    juridica: { type: String, required: true },
    consecutivo: { type: Number, required: true },
    fecha: { type: Date, required: true },
    paciente: { type: String, required: true },
    email: { type: String, required: false },
    telefono: { type: String, required: false },
    cliente: { type: String, required: false },
    cantidad: { type: String, required: false },
    procedimiento: { type: String, required: false },
    monto: { type: Number, required: false },
    subtotal: { type: Number, required: false },
    impuesto: { type: Number, required: false },
    total: { type: Number, required: false }

});
module.exports = mongoose.model("Facturas", schemaFacturas, "facturas");