"use strict";

const mongoose = require("mongoose");

const schemaIngresosHotel = new mongoose.Schema({
    fecha: { type: Date, required: true },
    monto: { type: Number, required: true }
});
module.exports = mongoose.model("IngresosHotel", schemaIngresosHotel, "ingresoshotel");