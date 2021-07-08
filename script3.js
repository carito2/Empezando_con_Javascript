console.log("--Ejercicio Amiga Mayor--")

let edadJulieta = 30;
let edadMartha = 25;

if (edadJulieta > edadMartha) {
    console.log("La amiga de mayor edad es Julieta")
} else {
    console.log ("La amiga de mayor edad es Martha")
}

console.log("--Ejercicio Hermanos Mayores--")

let edadAlberto = 30;
let edadMarcos = 25;
let edadJoel = 27;

if (edadAlberto > edadMarcos && edadAlberto > edadJoel) {
    console.log("El hermano mayor es Alberto")
} else if ( edadMarcos > edadAlberto && edadMarcos > edadJoel) {
    console.log("El hermano mayor es Marcos")
} else {
    console.log ("El hermano mayor es Joel")
}