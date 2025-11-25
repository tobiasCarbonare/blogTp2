// 11) importamos Model, DataTypes y la conexion a la base de datos
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/conexionDB.js';
export class User extends Model {}
User.init(
    {
        // 12) definimos los atributos del modelo   
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.TEXT
        },
        password: {
            type: DataTypes.STRING
        },
    },
    {
        // 13) vinculamos el modelo con la conexion a la base de datos y le damos un nombre al modelo
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false

    }
);
//resumen
// Este archivo define el modelo "User" utilizando Sequelize.
// El modelo tiene cuatro atributos: id, nombre, email y password.
// Se vincula con la tabla "users" en la base de datos y no utiliza timestamps.