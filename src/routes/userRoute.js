import { Router } from 'express';
import { login, createUser, getProfile, updateProfile,deleteUser } from '../controllers/usercontroller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import {  getAllUsers } from '../services/user.service.js';

const router = Router();

// Públicas
router.post('/login', login);
router.post('/', createUser); // Registro
router.get('/', getAllUsers); // Obtener todos los usuarios (para pruebas)

// Privadas (Requieren Token)
router.get('/me', authenticate, getProfile);   // Ver mi perfil
router.put('/me', authenticate, updateProfile); // Editar mi perfil
//router.delete('/:id', authenticate, deleteUser); // Eliminar usuario (opcional)
router.delete('/me',authenticate,deleteUser); // Eliminar usuario (opcional)

export default router;