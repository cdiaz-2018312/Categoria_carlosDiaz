const express = require ('express');
const cors = require('cors');
const {dbConection} =require('../database/config');

class Server {
    constructor (){
        //config inicail
        this.app = express();
        this.port= process.env.PORT;
        this.categoriasPath= '/api/categoria';

        //conectar db
        this.conectarDB();

        //middlewares
        this.middlewares();

        //rutas de la app
        this.routes();

    }
    async conectarDB(){
        await dbConection();
    }
    //middleware, funcion que sucede antes de las rutas
    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del Body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(  express.static('public') );
    }

    routes(){
        this.app.use (this.categoriasPath,require('../routes/categoria'));
    }
    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        } ) 
    }
}

module.exports= Server;