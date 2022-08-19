"use strict";
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Facturas = require("../models/facturas.model");

// ruta para registrar un usuario
router.post("/registrar-facturas", (req, res) => {
    let nuevaFactura = new Facturas({
        juridica: req.body.juridica,
        consecutivo: req.body.consecutivo,
        fecha: req.body.fecha,
        paciente: req.body.paciente,
        email: req.body.email,
        telefono: req.body.telefono,
        cliente: req.body.cliente,
        cantidad: req.body.cantidad,
        procedimiento: req.body.procedimiento,
        monto: req.body.monto,
        subtotal: req.body.subtotal,
        impuesto: req.body.impuesto,
        total: req.body.total

    });
    nuevaFactura.save((error) => {
        if (error) {
            res.json({
                msj: "Ocurrió un error al registrar la factura",
                error,
            });
        } else {
            res.json({
                msj: "La factura se registró exitosamente",
            });
        }
    });
});

// ruta para obtener la información de todo los usuarios
router.get("/obtener-facturas", (req, res) => {
    Facturas.find((error, lista) => {
        if (error) {
            res.json({
                msj: "No se pudo hacer el listado de facturas",
                error,
            });
        } else {
            res.json({
                msj: "Facturas listadas correctamente",
                lista,
            });
        }
    });
});

// ruta para modificar la información de un usuario
router.put("/actualizar-facturas", (req, res) => {});

// ruta para eliminar la información de cada usuario
router.delete("/eliminar-facturas", (req, res) => {
    Facturas.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: "No se pudo eliminar la factura",
                error,
            });
        } else {
            res.json({
                msj: "Factura eliminada correctamente",
            });
        }
    });

});

module.exports = router;