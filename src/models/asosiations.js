//27) importamos los modelos para definir las asociaciones
import { User } from './user.js';
import { Article } from './article.js';
// 28) definimos la relacion uno a muchos entre User y Article
User.hasMany(Article, { foreignKey: 'userId' ,onDelete: 'CASCADE' });
Article.belongsTo(User, { foreignKey: 'userId' });
//resumen
// Este archivo define las asociaciones entre los modelos User y Article utilizando Sequelize.
// Un usuario puede tener muchos artículos (hasMany), y cada artículo pertenece a un usuario (belongsTo).
// La clave foránea 'userId' se utiliza para establecer la relación, y se especifica que al eliminar un usuario,
// todos sus artículos asociados también se eliminarán (onDelete: 'CASCADE').