'use strict';

const mongoose = require("mongoose");

const schemaMascota = new mongoose.Schema({
    petUser: { type: String, required: true },
    petName: { type: String, required: true },
    petPhoto: { type: String, required: true },
    petCare: { type: String, required: false },
});

module.exports = mongoose.model("Mascota", schemaMascota, "mascotas");