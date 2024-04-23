// importar dependencias -> lo que necesitemos para el funcionamiento de codigo

import usuarioModel from "../models/user.models.js";

// peticiones
// Get -> me muestra mis usuarios
// POST -> crear usuarios
// PUT -> me modifica usuarios
// DELETE -> elimina usuarios

// Se hace una prueba inicial

export const getUsuario = async(req, res) => {
    return res.send('Funciona la petición GET');
}

//Logica para crear usuarios

export const postUsuario = async (req, res) => {
    return res.send('Funciona la petición POST');
}
export const putUsuario = async (req, res) => {
    return res.send('Funciona la petición PUT');
}
export const deleteUsuario = async (req, res) => {
    return res.send('Funciona la petición DELETE');
}