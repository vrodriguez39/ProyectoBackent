const express = require("express");
const { set } = require("mongoose");
const userSchema = require("..//../app/models/User");
const router = express.Router();

//Crear Usuarios
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver todos los Usuarios
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver usuario especifico
router.get("/users/:id", (req, res) => {
  const { id } = req.params;

  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

            //Editar Usuario
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name,age,email,rol,sucursal,password}= req.body;
  userSchema
    .updateOne({_id:id},{ $set: {name, age,email,rol,sucursal,password}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

                         //Eliminar
            router.delete("/users/:id", (req, res) => {
                const { id } = req.params;
                userSchema
                  .remove({_id:id})
                  .then((data) => res.json(data))
                  .catch((error) => res.json({ message: error }))
              });
module.exports = router;
