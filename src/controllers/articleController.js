// controllers/article.controller.js
import * as ArticleService from '../services/article.service.js';

// --- OBTENER TODOS ---
export const getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleService.getAllArticles();
        res.json(articles);
    } catch (e) { handleError(res, e); }
};

// --- OBTENER POR ID ---
export const getArticleById = async (req, res) => {
    try {
        const article = await ArticleService.getArticleById(req.params.id);
        // Simplificación: Si existe devuelve json, SINO (:) devuelve 404
        article ? res.json(article) : res.status(404).json({ message: 'No encontrado' });
    } catch (e) { handleError(res, e); }
};

// --- CREAR ---
export const createArticle = async (req, res) => {
    try {
        // req.user.id viene del middleware (Token)
        const newArticle = await ArticleService.createArticle({ 
            ...req.body, 
            userId: req.user.id 
        });
        res.status(201).json(newArticle);
    } catch (e) { handleError(res, e); }
};

// --- ACTUALIZAR ---
export const updateArticle = async (req, res) => {
    try {
        const updated = await ArticleService.updateArticle(req.params.id, req.body);
        updated ? res.json(updated) : res.status(404).json({ message: 'No encontrado' });
    } catch (e) { handleError(res, e); }
};

// --- ELIMINAR ---
export const deleteArticle = async (req, res) => {
    try {
        const result = await ArticleService.deleteArticle(req.params.id);
        result ? res.json({ message: 'Eliminado' }) : res.status(404).json({ message: 'No encontrado' });
    } catch (e) { handleError(res, e); }
};

// --- HELPER PARA ERRORES (Función auxiliar privada) ---
const handleError = (res, error) => {
    res.status(500).json({ message: 'Error del servidor', error: error.message });
};