// 7) creamos la conexion a la base de datos
import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize("blog", "root", "", { 
    host: "localhost",
    dialect: "mysql"
}
)