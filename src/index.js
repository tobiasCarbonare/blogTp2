// 5) importamos app
import 'dotenv/config'
import { app } from './app.js';
//8) importamos la conexion a la base de datos
import { sequelize } from './database/conexionDB.js';
// 15) importamos los modelos
import { Article } from './models/article.js';
import { User } from './models/user.js';
//30) importamos las asociaciones
import './models/asosiations.js';   
// 25) aumentar el limite de oyentes permitidos
import { EventEmitter } from 'events';
// Aumentamos el límite a 20 (o más si es necesario) para evitar la advertencia
EventEmitter.defaultMaxListeners = 20;
// 6) levantar el servidor  
//9) hacemos asincrona la funcion main, la forzamos a sincronizar la base de datos sin perder datos e imprimimos mensajes en consola
async function main() {
    await sequelize.sync({force: false}).then(() => {
        console.log("Base de datos conectada");
    }).catch((error) => {
        console.log("Error al conectar la base de datos: ", error);
    }   );
    const PORT = 3000;  
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}
main();
//10) creamos la base de datos en phpmyadmin llamada blogdb
//11) construir los modelos de datos en la carpeta models
