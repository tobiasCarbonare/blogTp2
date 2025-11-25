import 'dotenv/config';
import { app } from './app.js';
import { sequelize } from './database/conexionDB.js';
import './models/asosiations.js'; // Carga modelos y relaciones automáticamente

async function main() {
    try {
        // 1. Sincronizamos la Base de Datos
        // await detiene la ejecución aquí hasta que la DB responda.
        // Si falla, salta directamente al catch.
        await sequelize.sync({ force: false });
        console.log('✅ Base de datos conectada');

        // 2. Levantamos el servidor
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
        });

    } catch (error) {
        // 3. Manejo centralizado de errores de inicio
        console.error('❌ Error fatal al iniciar la aplicación:', error.message);
        console.error(error);
    }
}

main();