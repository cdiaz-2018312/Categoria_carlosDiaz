//importaciones principales
require ('dotenv').config();

//importar archivos
const Server = require ('./models/server');

//creamos instancia del server
const servidorIniciado = new Server();

//metodo listen
servidorIniciado.listen();