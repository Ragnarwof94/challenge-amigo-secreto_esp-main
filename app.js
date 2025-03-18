// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicializar array para los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtener el valor del input
    const nombre = input.value; // Obtener el valor del input()

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Verificar que no exista el nombre en la lista
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === nombre) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }
    }

    // Agregar el nombre al array de amigos()
    amigos[amigos.length] = nombre;

    // Limpiar el campo de texto
    input.value = "";

    // Mostrar el nombre en la lista
    mostrarListaAmigos();
}

