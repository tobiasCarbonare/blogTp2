// services/article.service.js
import { Article } from '../models/article.js';
import { User } from '../models/user.js';

// 1. Arrow functions de una línea (Return implícito)
export const getAllArticles = async () => await Article.findAll({
    include: { model: User, attributes: ['id', 'nombre'] }
});

export const getArticleById = async (id) => await Article.findByPk(id);

export const createArticle = async (data) => await Article.create(data);

// 2. Simplificación con Operador Ternario y método .update()
export const updateArticle = async (id, data) => {
    const article = await Article.findByPk(id);
    // Si existe, actualiza automágicamente con los datos y devuelve el objeto. Si no, null.
    return article ? await article.update(data) : null;
};

// 3. Optimización: destroy directo (Ahorra una consulta a la BD)
export const deleteArticle = async (id) => {
    // 'destroy' devuelve la cantidad de filas borradas (0 o 1)
    const rowsDeleted = await Article.destroy({ where: { id } });
    return rowsDeleted > 0; // Retorna true si borró algo, false si no existía.
};