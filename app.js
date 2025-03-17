// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participantes = [];
let resultado = '';

condicionesIniciales();

function limpiarLista() {
    participantes = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Amigo Secreto');
    asignarTextoElemento('p', 'Agrega participantes para poder sortear un amigo secreto.');
    document.getElementById("resultado").innerHTML = "";
    participantes = [];
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert('Esto no es un nombre, inténtalo de nuevo');
        return;
    }

    let nombreNormalizado = nombre.toLowerCase();

    if (participantes.includes(nombreNormalizado)) {
        alert(`"${nombre}" Nombre ya se encuentra en la lista. Favor de ingresar otro nombre.`);
        return;
    }

    participantes.push(nombreNormalizado);
    actualizarLista();
    limpiarCaja();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    participantes.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        asignarTextoElemento('p', 'Debes ingresar a lo menos 2 nombres para realizar el sorteo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * participantes.length);
    resultado = participantes[indiceAleatorio];

    asignarTextoElemento('#resultado', `Tu amigo secreto es: <strong>${resultado}</strong>`);
    limpiarLista();
}



