// services/user.service.js
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

// 1. One-liners para lectura
export const getAllUsers = async () => await User.findAll();
export const getUserById = async (id) => await User.findByPk(id);

// 2. Simplificación: bcrypt.hash acepta los "rounds" (10) directamente
export const createUser = async (data) => {
    data.password = await bcrypt.hash(data.password, 10);
    return await User.create(data);
};

// 3. Login compacto: Validación en una sola línea lógica
export const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    // Si existe usuario Y la contraseña coincide, devuélvelo. Si no, null.
    return (user && await bcrypt.compare(password, user.password)) ? user : null;
};

// 4. Update: Mantenemos el if del password, pero el resto es directo
export const updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    
    // Solo encriptamos si viene una contraseña nueva
    if (data.password) data.password = await bcrypt.hash(data.password, 10);
    
    return await user.update(data);
};

// 5. Delete eficiente: Borra directo sin buscar primero (1 consulta en vez de 2)
export const deleteUser = async (id) => {
    const rowsDeleted = await User.destroy({ where: { id } });
    return rowsDeleted > 0; // Retorna true si borró algo
};