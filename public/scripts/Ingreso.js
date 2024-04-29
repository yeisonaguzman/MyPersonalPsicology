// 1. Verificar conexión con HTLM
console.log('Hola soy ingreso, mucho gusto!');

// crear funcion
const iniciarSesion = async () => {

    // 1. Obtener los valores ingresados por el usuario

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(correo, contrasena);

    try {
        // Vamos a realizar nuestra petición GET a nuestra base de datos

        const respuesta = await fetch('http://localhost:3000/api/obtenerUsuario');
        const usuarios = await respuesta.json();

        console.log(usuarios);

        // Verificar si se encontró un usuario con el correo y la contraseña

        const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);

        if(esUsuarioRegistrado){

            // Verificamos si es admin

            const correoAdmin= 'administrador@gmail.com';

            if(esUsuarioRegistrado.correo == correoAdmin){
                alert('Hola administrador');
                window.location.href ='./Admin.html'
            }else{
                alert('Ingreso exitoso, bienvenido');
                window.location.href= 'index.html'
            }

        }else{
            alert('Correo o contraseña incorrectos. Usuario no encontrado! Vuelve a intentarlo o regístrate');
        }


    } catch (error) {
        console.error('Error al verificar inicio de sesión:', error);

    }


}