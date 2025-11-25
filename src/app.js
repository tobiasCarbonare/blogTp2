import express from 'express';
import { routerArticle } from './routes/articleRoute.js';
import routerUser from './routes/userRoute.js';

export const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rutas de la API (Convención: minúsculas y plural)
app.use('/api/articles', routerArticle);
app.use('/api/users', routerUser);