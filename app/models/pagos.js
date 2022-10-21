const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const pagoSchema = new Schema({
    nombre:{
        type: String,
        lowercase:true,
        require: true
    },
    codigo:{
        type: String,
        lowercase:true,
        require: true
    },
    
    },
{
    timestamps:true,
})

var pago =  mongoose.model('pago', pagoSchema);
module.exports = pago;