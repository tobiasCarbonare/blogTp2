// controllers/user.controller.js
import * as UserService from '../services/user.service.js';
import { generateToken } from '../utils/jwt.js';

// --- LOGIN ---
export const login = async (req, res) => {
    try {
        const user = await UserService.login(req.body.email, req.body.password);
        if (user) {
            const token = generateToken({ id: user.id, nombre: user.nombre });
            res.json({ message: 'Login exitoso', token });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    } catch (e) { handleError(res, e); }
};

// --- REGISTRO ---
export const createUser = async (req, res) => {
    try {
        const newUser = await UserService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (e) { handleError(res, e); }
};

// --- MI PERFIL (GET) ---
export const getProfile = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.user.id);
        user ? res.json(user) : res.status(404).json({ msg: 'No encontrado' });
    } catch (e) { handleError(res, e); }
};

// --- ACTUALIZAR MI PERFIL (PUT) ---
export const updateProfile = async (req, res) => {
    try {
        const updated = await UserService.updateUser(req.user.id, req.body);
        updated ? res.json(updated) : res.status(404).json({ msg: 'No encontrado' });
    } catch (e) { handleError(res, e); }
};

// --- OBTENER TODOS (ADMIN) ---
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (e) { handleError(res, e); }
};

// --- ELIMINAR USUARIO ---
export const deleteUser = async (req, res) => {
    // Simplificación: "Usa el ID de la URL, O (||) si no existe, usa el del token"
    const id = req.params.id || req.user?.id;

    if (!id) return res.status(400).json({ message: 'No se pudo identificar el usuario' });

    try {
        const result = await UserService.deleteUser(id);
        result ? res.json({ message: 'Usuario eliminado correctamente' }) 
               : res.status(404).json({ message: 'Usuario no encontrado' });
    } catch (e) { handleError(res, e); }
};

// --- HELPER PARA ERRORES ---
const handleError = (res, e) => {
    res.status(500).json({ error: e.message });
};