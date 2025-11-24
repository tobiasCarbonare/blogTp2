// 19) creamos la ruta para los articulos
import { Router } from 'express';
import { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle } from '../controllers/articleController.js';
const router = Router();
// 20) definimos una ruta get para obtener todos los articulos
router.get('/articles', getAllArticles);
// 21) definimos una ruta get para obtener un articulo por su id
router.get('/articles/:id', getArticleById);
// 22) definimos una ruta post para crear un nuevo articulo
router.post('/articles', createArticle);
// 23) definimos una ruta put para actualizar un articulo existente
router.put('/articles/:id', updateArticle);
// definimos uan ruta delete para eliminar un articulo existente
router.delete('/articles/:id',deleteArticle )

export const routerArticle = router;