/*console.log ("---Ejemplo clase funciones")

function verificarEdad(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad")
    } else {
        console.log("Eres menor de edad")
    }
}
verificarEdad(18);
verificarEdad(9);
*/

console.log("--challenge Meeting20--")

function cualEsMayor (num1,num2){
    if (num1 > num2) {
        console.log("El número " + num1 + " es mayor que el número " + num2 + ".");
    }
    else {
        console.log("El número " + num2 + " es mayor que el número " + num1 + ".");
    }
}

cualEsMayor(8,5);

function cualEsMenor(num1,num2,num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}

let numeroMenor = cualEsMenor(1,7,2);
console.log(numeroMenor);
console.log(cualEsMenor(5,7,20));