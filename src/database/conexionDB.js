// 7) creamos la conexion a la base de datos
import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize("blog", "root", "", { 
    host: "localhost",
    dialect: "mysql"
}
)
//resumen
// Este archivo establece la conexión a la base de datos MySQL llamada "blog" utilizando Sequelize.
// Se exporta la instancia de Sequelize para ser utilizada en otros módulos de la aplicación.