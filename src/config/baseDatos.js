//importamos las dependencias que necesitamos
import mongoose from 'mongoose';

//Crear una función que nos conecte a la base de datos

const conexionMongo = async() => {

    await mongoose.connect(process.env.BD_URL,{})

//Control de errores

try{

    console.log('conexion exitosa. Que emocioooonn');
}catch(error){
        console.log('error de conexion:', error.message);
}
}

//Tenemos que expotar nuestra funcion para llamarla desde nuestro servidor

export default conexionMongo; 