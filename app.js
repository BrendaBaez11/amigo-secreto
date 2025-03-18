// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaración del array que almacenará los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 * Captura el valor del campo de entrada, valida que no esté vacío,
 * agrega el nombre al array y actualiza la lista visual
 */
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return; // Salir de la función si el campo está vacío
    }
    
    // Añadir el nombre al array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual de amigos
    actualizarListaAmigos();
    
    // Limpiar el resultado anterior si existe
    document.getElementById('resultado').innerHTML = '';
}

/**
 * Función para actualizar la lista visual de amigos en el HTML
 * Recorre el array de amigos y crea elementos <li> para cada nombre
 */
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = '';
    
    // Iterar sobre el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        
        // Añadir el elemento a la lista
        listaAmigos.appendChild(elementoLista);
    }
}

/**
 * Función para sortear un amigo de forma aleatoria
 * Selecciona un nombre aleatorio del array y muestra el resultado
 */
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('Por favor, añada al menos un amigo antes de sortear.');
        return; // Salir de la función si no hay amigos
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento correspondiente
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `¡El amigo sorteado es: ${amigoSorteado}!`;
}