//27) importamos los modelos para definir las asociaciones
import { User } from './user.js';
import { Article } from './article.js';
// 28) definimos la relacion uno a muchos entre User y Article
User.hasMany(Article, { foreignKey: 'userId' ,onDelete: 'CASCADE' });
Article.belongsTo(User, { foreignKey: 'userId' });