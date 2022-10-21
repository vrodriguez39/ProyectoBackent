
const mongoose = require("mongoose");

// Make connection to MongoDB
const DB_URI = 'mongodb://localhost:27017/crudmongo'
module.exports = ()=>{
const connect = () =>{
    mongoose.connect(
        DB_URI,
        {
keepAlive:true,
useNewUrlParser:true,
useUnifiedTopology:true
        },
        (err)=>{
            if(err){
                console.log('Falla de Bd');
            }else{

            }console.log('Conexion Exitosa')
        }
    )
}
connect();
}


