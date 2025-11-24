// services/article.service.js
import { Article } from '../models/article.js';
import { User } from '../models/user.js';

export const getAllArticles = async () => {
    // Retorna la promesa directamente
    return await Article.findAll({
        include: { model: User, attributes: ['id', 'nombre'] }
    });
};

export const getArticleById = async (id) => {
    return await Article.findByPk(id);
};

export const createArticle = async (data) => {
    // data es un objeto { title, description, userId }
    return await Article.create(data);
};

export const updateArticle = async (id, data) => {
    const article = await Article.findByPk(id);
    if (!article) return null; // Indicamos que no se encontró

    // Actualizamos campos
    article.title = data.title;
    article.description = data.description;
    
    await article.save();
    return article;
};

export const deleteArticle = async (id) => {
    const article = await Article.findByPk(id);
    if (!article) return null; // Indicamos que no se encontró

    await article.destroy();
    return true; // Indicamos éxito
};