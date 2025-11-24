// controllers/article.controller.js
import * as ArticleService from '../services/article.service.js';

// --- OBTENER TODOS ---
export const getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleService.getAllArticles();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los articulos', error: error.message });
    }
};

// --- OBTENER POR ID ---
export const getArticleById = async (req, res) => {
    const { id } = req.params;
    try {
        const article = await ArticleService.getArticleById(id);
        
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ message: 'Articulo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el articulo', error: error.message });
    }
};

// --- CREAR ---
export const createArticle = async (req, res) => {
    const { title, description, userId } = req.body;
    try {
        // Pasamos los datos limpios al servicio
        const newArticle = await ArticleService.createArticle({ title, description, userId });
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el articulo', error: error.message });
    }
};

// --- ACTUALIZAR ---
export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    
    try {
        const updatedArticle = await ArticleService.updateArticle(id, { title, description });
        
        if (updatedArticle) {
            res.json(updatedArticle);
        } else {
            res.status(404).json({ message: 'Articulo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el articulo', error: error.message });
    }
};

// --- ELIMINAR ---
export const deleteArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await ArticleService.deleteArticle(id);
        
        if (result) {
            res.json({ message: 'Articulo eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Articulo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el articulo', error: error.message });
    }
};