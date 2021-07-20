//console.log("---Ejercicios clase Meeting 21---");
//Escribe un ciclo for  que muestre por consola los números desde el 0 hasta tu edad. 

/*for (let i=0; i <= 5; i++) {
    console.log(i);
}
//Abstrae el ciclo anterior en una función, que tome como argumento un número (representando una edad), y que cuando se invoque esa función, muestre por consola los números del 0 a esa edad.

//Función declarativa
function mostrarNumero (edad) {
    for (let i=0; i <= edad; i++) {
        console.log(i);
    }
}

mostrarNumero(10);

//Arrow function 
const mostrarNumero1 = (edad) => {
    for (let i=0; i <= edad; i++) {
        console.log(i);
    }
}

mostrarNumero1(5);
*/
/*
//Ejercicio Follow me 
//Muestra por consola el array de referentes
let referentes = [
    "@wesbox",
    "@dan_abramov",
    "@stolinkski",
    "@ryanflorence",
    "@kentcdodds",
    "@sophiebits",
    "@acdlite",
    "@sebmarkbage",
    "@stevekinney"
  ];
//Funcion declarativa
function mostrarConsola1 (referentes) {
    for (let i=0; i < referentes.length; i++){
        console.log(referentes[i]);
    }
}
mostrarConsola1(referentes);

//Arrow Function
const mostrarConsola = (referentes) => {
    for (let i=0; i <= referentes.length; i++){
        console.log(referentes[i]);
    }
}

mostrarConsola(referentes);

// 2. Agrega un par de usernames utilizando los metodos unshift y push

//push --> lo agrega al final
referentes.push ("@carito_camo", "@pipe");

referentes.unshift ("@catalinaanai");

// 3. Vuelve a mostrar el array de referentes para verificar que los usernames fueron agregados
mostrarConsola (referentes);

/*console.log("---Ejercicio Follow me funcional---")
// 1. Crea una función que tome una lista de nombres (un array), y un nombre (un string). 
// La función deberá RETORNAR un nuevo array con los mismos nombres del array
// junto al nuevo nombre insertado dentro del array. Por ejemplo,
// Supongamos que tenemos esta lista de personas:
let followers = [
    "@wesbos",
    "@dan_abramov",
    "@stolinkski",
    "@ryanflorence",
    "@kentcdodds",
    "@sophiebits",
    "@acdlite",
    "@sebmarkbage",
    "@stevekinney"
  ];

// Y queremos agregar un nuevo username: "@unUsername"

// Crea tu función debajo de este comentario.
const newUsername = (array, userName) => {
    array.push (userName);
    for (let i=0; i <= array.length; i++) {
        console.log(array[i]);
    }
    return array;
}

let newNames = newUsername (followers, "@unNuevoNombre");
console.log(newNames);
*/
//
/*console.log("---Ejercicio Stalker---");
//Desarrolla una función que verifique si un string está dentro de un array.

//La función debe tomar una lista y un string. La lista representa un array de usernames y el string el nombre a buscar.

//Se espera que la función muestre por consola el mensaje correspondiente al resultado.

const verifyUsername = (array, userName) => {
    if(array.includes(userName)){
        console.log(`El usuario ${userName} pertenece al string`);
    }else{
        console.log(`El usuario ${userName} no pertenece al string`);
    }
}

verifyUsername (followers, "@havebeeair");
verifyUsername (followers, "@wesbos");

console.log("---Ejercicio Unfollow---");
//Agrega al ejemplo anterior la funcionalidad de poder eliminar elementos de un array con el método splice.

//Desarrolla una función que tome un username, y un array de users, y que retorne el array sin el username dentro de sus elementos.

//Adicionalmente, muestra un mensaje por consola que indique si el username pasado como argumento no fue encontrado en la lista.

//Tip: utiliza la función de stalker para determinar si un username está en la lista de nombres.
const verifyUsername1 = (array, userName) => {
    if(array.includes(userName)){
        array.splice (userName);
        console
    }else{
        console.log(`El usuario ${userName} no pertenece al string`);
    }
}
*/