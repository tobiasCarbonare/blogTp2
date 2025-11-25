import { verifyToken } from '../utils/jwt.js';

export const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: 'Token no proporcionado' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Formato de token inválido' });

    try {
        const decoded = verifyToken(token);
        req.user = decoded; // Guardamos datos del usuario en la request
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token inválido o expirado' });
    }
};
//resumen
// Este middleware verifica la autenticidad del token JWT en las solicitudes entrantes.
// Si el token es válido, agrega los datos del usuario a la solicitud (req.user) y permite que la solicitud continúe.
// Si el token es inválido o no está presente, responde con un error 401 o 403.