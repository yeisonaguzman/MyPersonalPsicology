// importar dependencias -> lo que necesitemos para el funcionamiento de codigo

import usuarioModel from "../models/user.models.js";

// peticiones
// Get -> me muestra mis usuarios
// POST -> crear usuarios
// PUT -> me modifica usuarios
// DELETE -> elimina usuarios

// Se hace una prueba inicial

export const getUsuario = async(req, res) => {

    //Manejo de errores con try y catch

try{
    let usuarios = await usuarioModel.find();
    return res.send(usuarios);

}catch(error){
    return res.json({error: "error al mostrar los datos" + error });
}
}

//Logica para crear usuarios

export const postUsuario = async (req, res) => {
    try{
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario)

    } catch(error){
        return res.json({error: "error al crear el usuario", message: error.message });

    }
}
export const putUsuario = async (req, res) => {
    try{
        let datosModificar= req.body;
        let idModificar = req.params._id;
        
        await usuarioModel.findByIdAndUpdate(idModificar, datosModificar);
        return res.json({message: "Usuario actualizado correctamente"});

    }catch(error){
        return res.json({error: "error al modificar usuario", message: error.message});


    }
}

export const deleteUsuario = async (req, res) => {
    try{
        let idEliminar= req.params._id;
        let usuarioEliminad= await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado=true){
            return res.json({message: "Usuario eliminado correctamente"});
            
        }else{
            return res.json({message: "Ups! no se pudo eliminar ese usuario"});
        }

    }catch(error){
        return res.json({error: "error al eliminar usuario", message:error.message});
        
    }
}