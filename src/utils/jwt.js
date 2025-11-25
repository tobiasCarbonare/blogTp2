import jwt from 'jsonwebtoken';

// BORRA O COMENTA ESTAS LÍNEAS QUE TIENES AL PRINCIPIO:
// const SECRET_KEY = process.env.JWT_SECRET; 
// if (!SECRET_KEY) throw new Error(...) 

export const generateToken = (payload) => {
    // LEEMOS LA CLAVE AQUÍ ADENTRO (Lazy Loading)
    // Así damos tiempo a que dotenv cargue primero
    const SECRET = process.env.JWT_SECRET;
    
    if (!SECRET) {
        throw new Error('No se encontró JWT_SECRET en el archivo .env');
    }

    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    const SECRET = process.env.JWT_SECRET;
    
    if (!SECRET) {
        throw new Error('No se encontró JWT_SECRET en el archivo .env');
    }

    return jwt.verify(token, SECRET);
};