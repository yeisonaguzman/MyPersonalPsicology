//1. importar las dependencias que vamos a usar
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import conexionMongo from './src/config/baseDatos.js';



//2. Configurar nuestro servidor
const app = express();
const puerto = 6000;

//2.1 se necesta configurar una variable de entorno
dotenv.config();

//2.2 Configurar conexion de base de datos
conexionMongo();


// 3. ESTABLECER LA CONEXIÓN CON NUESTRO FRONT
const rutaPublica = path.join(process.cwd(), 'public');
app.use(express.static(rutaPublica));

app.use(express.json());

//Especificamos que va a acceder a nuestro index HTML

app.get('/', (req,res) => {
   res.sendFile(path.join(rutaPublica,'index.html'))
});

//4. Inicializar el servidor

app.listen(puerto, () => {
   console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});