// services/user.service.js
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

export const getAllUsers = async () => await User.findAll();

export const getUserById = async (id) => await User.findByPk(id);

export const createUser = async (data) => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt); // Encriptamos
    return await User.create(data);
};

export const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) return null;
    
    const isMatch = await bcrypt.compare(password, user.password); // Comparamos
    return isMatch ? user : null;
};

export const updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    
    // Si envían password nuevo, hay que encriptarlo de nuevo
    if(data.password) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
    }
    
    return await user.update(data);
};

// borrar mi usuario
export const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null; // Indicamos que no se encontró

    await user.destroy();
    return true; // Indicamos éxito
}
