export const validateUserBody = (req, res, next) => {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
        return res.status(400).json({ 
            message: 'Faltan datos obligatorios (nombre, email, password)' 
        });
    }

    if (!email.includes('@')) {
        return res.status(400).json({ 
            message: 'El email no es válido' 
        });
    }
    
    if (password.length < 6) {
        return res.status(400).json({
            message: 'La contraseña debe tener al menos 6 caracteres'
        });
    }

    // Si todo está bien, pasa al siguiente paso (el controlador)
    next();
};