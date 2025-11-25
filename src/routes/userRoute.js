import { Router } from 'express';
import { 
    login, createUser, getAllUsers, // <-- Importado del controller (Correcto)
    getProfile, updateProfile, deleteUser 
} from '../controllers/userController.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

// --- RUTAS PÚBLICAS ---
router.post('/login', login);
router.post('/', createUser);
router.get('/', getAllUsers);

// --- RUTAS PRIVADAS (Perfil del Usuario) ---
// Simplificación: Agrupamos todas las rutas '/me'
router.route('/me')
    .all(authenticate)        // 1. Aplica seguridad a todas
    .get(getProfile)          // 2. Ver
    .put(updateProfile)       // 3. Editar
    .delete(deleteUser);      // 4. Eliminar

export default router;