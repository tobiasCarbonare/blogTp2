// 11) importamos Model, DataTypes y la conexion a la base de datos
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/conexionDB.js';
export class Article extends Model {}
Article.init(
    {
        // 12) definimos los atributos del modelo   
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
    },
    {
        // 13) vinculamos el modelo con la conexion a la base de datos y le damos un nombre al modelo
        sequelize,
        modelName: 'Article',
        tableName: 'articles',
        timestamps: false

    }
);