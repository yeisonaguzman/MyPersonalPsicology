// 1. Verificar conexion con HTML
console.log('Holaaaaa soy Registro');


// 2. Crear mi función para Registro

const registrarUsuario = async () => {

    // 2.1 obtener los datos de nuestro formulario
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(nombreCompleto, correo, contrasena);


    // 2.2 crear un objeto con los datos del usuario
    const datosUsuario = {
        nombreCompleto,
        correo,
        contrasena
    }

    console.log(datosUsuario);

    //2.3 Hacer la petición POST para crear usuario en nuestra base de datos

    try {

        // Aca estamos creando el usuario en la base de datos
        const respuesta = await fetch('http://localhost:3000/api/crearUsuario',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosUsuario)
            }
        );

        const nuevoUsuario = await respuesta.json();
        console.log('Usuario creado exitosamente', nuevoUsuario)

    // Condicional para redireccionar a ingreso.html
        if(nuevoUsuario){
            alert('Registro exitoso!');
            window.location.href = './Ingreso.html'
        } else{
            alert('Ups! error de registro, inténtalo nuevamente');
        }

    } catch (error) {
        console.error('Error al registrar usuario', error);
    }


} 