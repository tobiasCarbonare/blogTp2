// 19) creamos la ruta para los articulos
import { Router } from 'express';
import { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle } from '../controllers/articleController.js';
import { authenticate } from '../middlewares/auth.middleware.js';
const router = Router();
// Rutas públicas
router.get('/', getAllArticles);
router.get('/:id', getArticleById);
// Rutas privadas (requieren autenticación)

router.post('/', authenticate, createArticle);
router.put('/:id', authenticate, updateArticle);
router.delete('/:id', authenticate, deleteArticle);


export const routerArticle = router;