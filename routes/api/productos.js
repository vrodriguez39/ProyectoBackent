const express = require("express");
const { set } = require("mongoose");
const productoSchema = require("..//../app/models/productos");
const router = express.Router();

//Crear Productos
router.post("/productos", (req, res) => {
  const producto = productoSchema(req.body);
  producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver todos los productos
router.get("/productos", (req, res) => {
  productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver Producto especifico
router.get("/productos/:id", (req, res) => {
  const { id } = req.params;

  productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

            //Editar Productos
router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre,sku,stock,sucursal,precio,status}= req.body;
  productoSchema
    .updateOne({_id:id},{ $set: {nombre,stock,sucursal,precio,status}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

                         //Eliminar Producto
            router.delete("/productos/:id", (req, res) => {
                const { id } = req.params;
                productoSchema
                  .remove({_id:id})
                  .then((data) => res.json(data))
                  .catch((error) => res.json({ message: error }))
              });
module.exports = router;
