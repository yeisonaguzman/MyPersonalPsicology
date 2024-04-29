// 1. Verificar conexión local
console.log('Holaaaaa, soy Administrador');

// Función para obtener los datos de mi base datos

const mostrarUsuarios = async () => {

    try {
        const respuesta = await fetch('http://localhost:3000/api/obtenerUsuario');
        const usuarios = await respuesta.json();
        console.log(usuarios);
        mostrarTabla(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios', error);
    }

}

// Función para crear una en cada usuario


function mostrarTabla(usuarios) {
    const tabla = document.getElementById('miTabla');
    tabla.innerHTML = '';

    usuarios.forEach(usuario => {
        //por cada usuario, me va a crear una fila en la tabla

        tabla.innerHTML += `
        
        <tr>
                <td>${usuario.nombreCompleto}</td>
                <td>${usuario.correo}</td>
                <td>
                    <button type="button" class="btn btn-danger" id="${usuario._id}" onclick="eliminarUsuario(event)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                      </svg>Eliminar
                      </button>
                </td>
        </tr>
              
        `

    });
}

mostrarUsuarios();

// Función para eliminar usuarios por id
function eliminarUsuario(event) {
    console.log('Eliminar');
    const idUsuarioEliminar = event.target.id;
    console.log('Id Usuario Eliminar');

    fetch(`http://localhost:3000/api/eliminarUsuario/${idUsuarioEliminar}`, { method: 'DELETE' }).then(
        response => {
            if (!response.ok) {
                console.error('Error! No se pudo eliminar usuario');
            } else {
                alert('Usuario eliminado correctamente');
                mostrarUsuarios();
            }
        }).catch(error => {
            console.log('Error al eliminar usuario', error);
        });

}