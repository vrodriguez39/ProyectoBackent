const express = require("express");
const { set } = require("mongoose");
const pagosSchema = require("..//../app/models/pagos");
const router = express.Router();

//Crear metodo de pago
router.post("/pagos", (req, res) => {
  const pagos = pagosSchema(req.body);
  pagos
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver todos los pagos
router.get("/pagos", (req, res) => {
  pagosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver pago especifico
router.get("/pagos/:id", (req, res) => {
  const { id } = req.params;

  pagosSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

            //Editar Pago
router.put("/pagos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre,codigo}= req.body;
  pagosSchema
    .updateOne({_id:id},{ $set: {nombre,codigo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

                         //Eliminar Pago
            router.delete("/pagos/:id", (req, res) => {
                const { id } = req.params;
                pagosSchema
                  .remove({_id:id})
                  .then((data) => res.json(data))
                  .catch((error) => res.json({ message: error }))
              });
module.exports = router;
