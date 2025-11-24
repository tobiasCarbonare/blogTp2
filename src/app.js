// 4) levantar servidor con express
import express from 'express';
// 24) importamos las rutas
import { routerArticle } from './routes/articleRoute.js';
import { routerUser } from './routes/userRoute.js';

export const app = express();
// 25) usamos express.json para que el servidor pueda recibir datos en formato json
app.use(express.json());
// 26) usamos las rutas en la aplicacion
app.use("/api/Article", routerArticle);
app.use("/api/User", routerUser);