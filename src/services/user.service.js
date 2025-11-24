// services/user.service.js
import { User } from '../models/user.js';

// --- OBTENER TODOS ---
export const getAllUsers = async () => {
    return await User.findAll();
};

// --- OBTENER POR ID ---
export const getUserById = async (id) => {
    return await User.findByPk(id);
};

// --- CREAR ---
export const createUser = async (data) => {
    // data es un objeto { nombre, email, password }
    return await User.create(data);
};

// --- ACTUALIZAR ---
export const updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    
    if (!user) return null; // No encontrado

    // Actualizamos las propiedades
    user.nombre = data.nombre;
    user.email = data.email;
    user.password = data.password;

    await user.save();
    return user; // Devolvemos el usuario actualizado
};

// --- ELIMINAR ---
export const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    
    if (!user) return null; // No encontrado

    await user.destroy();
    return true; // Retornamos true para indicar éxito
};