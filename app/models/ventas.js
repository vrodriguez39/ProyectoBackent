const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const ventaSchema = new Schema({
    productos: {
        type: String,
        lowercase: true,
        require: true,
      },
      total: {
        type: Number,
        lowercase: true,
        require: true,
      },
      sucursal: {
        type: String,
        lowercase: true,
        require: true,
      },
      usuario: {
        type: String,
        lowercase: true,
        require: true,
      },
      metodopago: {
        type: String,
        lowercase: true,
        require: true,
      },
  
},
{timestamps:true,
})

var venta =  mongoose.model('venta', ventaSchema);
module.exports = venta;