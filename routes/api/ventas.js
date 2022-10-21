const express = require("express");
const { set } = require("mongoose");
const ventaSchema = require("..//../app/models/ventas");
const router = express.Router();

//Crear Venta
router.post("/Ventas", (req, res) => {
  const venta = ventaSchema(req.body);
  venta
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver todas las Ventas
router.get("/ventas", (req, res) => {
  ventaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver Ventas especificas
router.get("/ventas/:id", (req, res) => {
  const { id } = req.params;

  ventaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

            //Editar Venta
router.put("/ventas/:id", (req, res) => {
  const { id } = req.params;
  const { productos,total,sucursal,usuario,metodopago}= req.body;
  ventaSchema
    .updateOne({_id:id},{ $set: {productos,total,sucursal,usuario,metodopago}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

                         //Eliminar Venta
            router.delete("/ventas/:id", (req, res) => {
                const { id } = req.params;
                ventaSchema
                  .remove({_id:id})
                  .then((data) => res.json(data))
                  .catch((error) => res.json({ message: error }))
              });
module.exports = router;
