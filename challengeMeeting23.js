//1. Sigue las instrucciones de este sandbox y calcula la cantidad de personas asistentes a un evento.
let personas = [
    {
        nombre: "Jhony",
        asistente: null,
        seccion: "gold",
        rol: "speaker"
    },
    {
        nombre: "Manuel",
        asistente: true,
        seccion: "vip",
        rol: "viewer"
    },
    {
        nombre: "Fran",
        asistente: true,
        seccion: "vip",
        rol: "viewer"
    },
    {
        nombre: "Cintia",
        seccion: "platino",
        rol: "viewer"
    },
    {
        nombre: "Marcos",
        asistente: null,
        seccion: "gold",
        rol: "viewer"
    },
    {
        nombre: "Victoria",
        asistente: true,
        seccion: "platino",
        rol: "speaker"
    }
];
//Función declarativa
function asistentes(listaPersonas) {
    let suma = 0;
    for (let i=0; i < listaPersonas.length; i++) {
        if (listaPersonas[i].asistente != undefined || listaPersonas[i].asistente != null) {
            suma++;
        }
    }
    return suma;
}
//Arrow Function
const asistentes2 = (listaPersonas) => {
    let suma = 0;
    for (let i=0; i < listaPersonas.length; i++) {
        if (listaPersonas[i].asistente != undefined || listaPersonas[i].asistente != null) {
            suma++;
        }
    }
    return suma;
}

//  * Esta fución debe calcular el total de asistentes
//  * según una lista de personas.
//  *
//  * Se considera que una persona esta "asistente" si
//  * la propiedad respectiva es distinta a null y undefined
//  *
//  * La función debe retornar el número de asistencias.

//   * La implementación debe ser:

let totalAsistentes = asistentes(personas);
console.log(totalAsistentes);

let totalAsistentes2 = asistentes2(personas);
console.log(totalAsistentes2);

// 2. Sobre el sandbox anterior, desarrolla una función que te permita crear un nuevo array que tenga solo las personas asistentes. 
// Es decir, que tengan la propiedad “asistente” dentro de su objeto, y que esta sea igual a “true”.

function verificarAsistentes (listaAsistentes, valor) {
    let nuevaLista = [];
    for (let i=0; i < listaAsistentes.length; i++) {
        if (listaAsistentes[i].asistente === valor) {
            nuevaLista.push(listaAsistentes[i]);
        } 
    }
    return nuevaLista;
}

let asistentesNew = verificarAsistentes (personas, true);
console.log(asistentesNew);

// 3. Además, desarrolla una función que te permite crear un nuevo array que tenga solo las personas de la sección “platino”.
const verificarSeccion = (listaAsistentes, propiedad, valor) => {
    let nuevaLista = [];
    for (let i=0; i < listaAsistentes.length; i++) {
        if (listaAsistentes[i][propiedad] === valor) {
            nuevaLista.push(listaAsistentes[i]);
        } 
    }
    return nuevaLista;
}

let asistentesPlatino = verificarSeccion (personas, "seccion", "platino");
console.log(asistentesPlatino);

// 4. Finalmente, crea una única función que cree un nuevo array según un filtro y un valor especificado, 
//los cuales tendrán que ser pasados como argumentos a la función.

const filtrarPersonas = (listaAsistentes, filtro, valor) => {
    let nuevaLista = [];
    for (let i=0; i < listaAsistentes.length; i++) {
        if (listaAsistentes[i][filtro] === valor) {
            nuevaLista.push(listaAsistentes[i]);
        } 
    }
    return nuevaLista;
}

let speakers = filtrarPersonas(personas, "rol", "speaker");
console.log(speakers);