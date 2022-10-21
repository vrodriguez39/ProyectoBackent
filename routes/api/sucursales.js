const express = require("express");
const { set } = require("mongoose");
const sucursalesSchema = require("..//../app/models/sucursales");
const router = express.Router();

//Crear Sucursales
router.post("/sucursales", (req, res) => {
  const sucursales = sucursalesSchema(req.body);
  sucursales
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver todas las sucursales
router.get("/sucursales", (req, res) => {
  sucursalesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver Sucursal especifica
router.get("/sucursales/:id", (req, res) => {
  const { id } = req.params;

  sucursalesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

            //Editar Sucursal
router.put("/sucursales/:id", (req, res) => {
  const { id } = req.params;
  const { nombre,codigo,telefono,direccion,ubicacion,status}= req.body;
  sucursalesSchema
    .updateOne({_id:id},{ $set: {nombre,codigo,telefono,direccion,ubicacion,status}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

                         //Eliminar Sucursal
            router.delete("/sucursales/:id", (req, res) => {
                const { id } = req.params;
                sucursalesSchema
                  .remove({_id:id})
                  .then((data) => res.json(data))
                  .catch((error) => res.json({ message: error }))
              });
module.exports = router;
