// importamos dependencias

import express from 'express';
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controllers/user.controller.js';


// definir una variable que va a contener todas las rutas

const usuarioRouter = express.Router();


// definir nuestras rutas especificas. Primero GetUsuario

usuarioRouter.get('/obtenerUsuario', getUsuario);

// Ruta para crear las demas rutas

usuarioRouter.post('/crearUsuario', postUsuario);

// Ruta para modificar usuarios por su ID

usuarioRouter.put('/modificarUsuario/:_id', putUsuario);

// Ruta para eliminar usuario por su id

usuarioRouter.delete('/eliminarUsuario/:_id', deleteUsuario);

//Exportamos las rutas
export default usuarioRouter;
