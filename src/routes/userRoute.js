// 19) creamos la ruta para los usuarios
import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { validateUserBody } from '../middlewares/validateUser.js';
const router = Router();
// Se ejecuta validateUserBody ANTES de createUser
router.post('/users', validateUserBody, createUser);

// 20) definimos una ruta get para obtener todos los usuarios
router.get('/users', getAllUsers);
// 21) definimos una ruta get para obtener un usuario por su id
router.get('/users/:id', getUserById);
// 22) definimos una ruta post para crear un nuevo usuario
router.put('/users/:id', updateUser);
// definimos uan ruta delete para eliminar un usuario existente
router.delete('/users/:id',deleteUser )

export const routerUser = router;