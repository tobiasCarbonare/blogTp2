// controllers/user.controller.js
import * as UserService from '../services/user.service.js';

// --- OBTENER TODOS ---
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
    }
};

// --- OBTENER POR ID ---
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserService.getUserById(id);
        
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
    }
};

// --- CREAR ---
export const createUser = async (req, res) => {
    const { nombre, email, password } = req.body;
    try {
        const newUser = await UserService.createUser({ nombre, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
    }
};

// --- ACTUALIZAR ---
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, password } = req.body;
    
    try {
        const updatedUser = await UserService.updateUser(id, { nombre, email, password });
        
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
    }
};

// --- ELIMINAR ---
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await UserService.deleteUser(id);
        
        if (result) {
            res.json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
    }
};