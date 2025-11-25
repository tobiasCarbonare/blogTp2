import * as UserService from '../services/user.service.js';
import { generateToken } from '../utils/jwt.js';

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserService.login(email, password);
        if (user) {
            const token = generateToken({ id: user.id, nombre: user.nombre });
            res.json({ message: 'Login exitoso', token });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    } catch (e) { res.status(500).json({ error: e.message }); }
};

export const createUser = async (req, res) => { // Registro público
    try {
        const newUser = await UserService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (e) { res.status(500).json({ error: e.message }); }
};

// "Mi Perfil" - Usa req.user.id (del token)
export const updateProfile = async (req, res) => {
    try {
        const updated = await UserService.updateUser(req.user.id, req.body);
        updated ? res.json(updated) : res.status(404).json({ msg: 'No encontrado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
};

export const getProfile = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.user.id);
        user ? res.json(user) : res.status(404).json({ msg: 'No encontrado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
};
// --- OBTENER TODOS LOS USUARIOS (ADMIN) ---
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (e) { res.status(500).json({ error: e.message }); }
};
// src/controllers/user.controller.js

export const deleteUser = async (req, res) => {
    // 1. Primero intentamos ver si el ID viene en la URL (ej: /users/5)
    let id = req.params.id;

    // 2. Si NO hay ID en la URL, significa que estás en la ruta '/me'
    // Entonces usamos el ID que viene dentro del token (req.user.id)
    if (!id && req.user) {
        id = req.user.id; 
    }

    // Validación de seguridad: Si por alguna razón no tenemos ID, paramos.
    if (!id) {
        return res.status(400).json({ message: 'No se pudo identificar el usuario a eliminar' });
    }

    try {
        // 3. Ahora sí, pasamos solo el NÚMERO (id) al servicio
        const result = await UserService.deleteUser(id);
        
        if (result) {
            res.json({ message: 'Tu usuario ha sido eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar', error: error.message });
    }
};