import jwt from 'jsonwebtoken';

// Usamos arrow functions con retorno implícito.
// Accedemos a process.env directo en la función para mantener el "Lazy Loading" seguro.

export const generateToken = (payload) => 
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

export const verifyToken = (token) => 
    jwt.verify(token, process.env.JWT_SECRET);