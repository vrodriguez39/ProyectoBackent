const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const rutaproductos = require("./routes/api/productos");
const rutausers = require("./routes/api/user");
const rutasucursales = require("./routes/api/sucursales");
const rutapagos = require("./routes/api/pagos");
const rutaventas = require("./routes/api/ventas");



//const connectToMongoDB = require("./config/db");
const port = process.env.PORT || 5000;

// Accept incoming request
app.use(express.json({ extended: false }));
// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use('/api', rutaproductos,rutausers,rutasucursales,rutapagos,rutaventas);



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Conectado a MongoDb Atlas"))
.catch((error)=> console.error(error))

// Run the server
app.listen(port, () => console.log('Servidor Corriendo en',port));