//usando express
const express = require("express");
//usando carpeta rutas
const rutas = require('./routes');
//usando express
const aplicacion = express();
//puerto usado
const port = 3600;
//usar formato json
aplicacion.use(express.json());
//usando las rutas
rutas(aplicacion)

//llamar al puerto
aplicacion.listen(port,()=>{
    console.log("Puerto activo"+ port);
})
