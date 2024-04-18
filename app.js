//1. importar las dependencias que vamos a usar
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';



//2. Configurar nuestro servidor
const app = express();
const puerto = 9000;

//2.1 se necesta configurar una variable de entorno
dotenv.config();


// 3. ESTABLECER LA CONEXIÓN CON NUESTRO FRONT



//4. Inicializar el servidor

app.listen(puerto, () => {
   console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});