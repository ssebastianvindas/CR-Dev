"use strict";

const mongoose = require("mongoose");

const schemaReporteHotel = new mongoose.Schema({
    fecha: { type: Date, required: true },
    monto: { type: Number, required: true },
});
module.exports = mongoose.model("ReporteHotel", schemaReporteHotel, "reportehotel");