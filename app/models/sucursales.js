const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const sucursalesSchema = new Schema({
    nombre: {
        type: String,
        lowercase: true,
        require: true,
      },
      codigo: {
        type: Number,
        lowercase: true,
        require: true,
      },
      telefono: {
        type: Number,
        lowercase: true,
        require: true,
      },
      direccion: {
        type: String,
        lowercase: true,
        require: true,
      },
      ubicacion: {
        type: String,
        lowercase: true,
        require: true,
      },   
      status: {
        type: String,
        lowercase: true,
        require: true,
      },
  },
  
{timestamps:true,
})

var sucursales =  mongoose.model('sucursales', sucursalesSchema);
module.exports = sucursales;