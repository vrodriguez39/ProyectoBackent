const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const productoSchema = new Schema({
    nombre:{
        type: String,
        lowercase:true,
        require: true
    },
    sku:{
        type: Number,
        lowercase:true,
        require: true
    },
    stock:{
        type: String,
        lowercase:true,
        require: true
    },
    sucursal:{
        type: String,
        lowercase:true,
        require: true
    },
    precio:{
        type: Number,
        lowercase:true,
        require: true
    },
    status:{
        type: String,
        lowercase:true,
        require: true
    },
  
},
{timestamps:true,
})

var producto =  mongoose.model('producto', productoSchema);
module.exports = producto;