import { Router } from 'express';
import { 
    getAllArticles, getArticleById, 
    createArticle, updateArticle, deleteArticle 
} from '../controllers/articleController.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

// --- RUTAS BASE ('/') ---
router.route('/')
    .get(getAllArticles)                  // Público: Ver todos
    .post(authenticate, createArticle);   // Privado: Crear (requiere token)

// --- RUTAS CON ID ('/:id') ---
router.route('/:id')
    .get(getArticleById)                  // Público: Ver uno
    .put(authenticate, updateArticle)     // Privado: Editar
    .delete(authenticate, deleteArticle); // Privado: Eliminar

export const routerArticle = router;