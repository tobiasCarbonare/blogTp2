// 19) creamos la ruta para los usuarios
import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';
const router = Router();
// 20) definimos una ruta get para obtener todos los usuarios
router.get('/users', getAllUsers);
// 21) definimos una ruta get para obtener un usuario por su id
router.get('/users/:id', getUserById);
// 22) definimos una ruta post para crear un nuevo usuario
router.post('/users', createUser);
// 23) definimos una ruta put para actualizar un usuario existente
router.put('/users/:id', updateUser);
// definimos uan ruta delete para eliminar un usuario existente
router.delete('/users/:id',deleteUser )

export const routerUser = router;