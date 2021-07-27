// // const numeros = [1, 2, 3, 4, 5, 6];
// // const listaNumeros = numeros.map((elemento) => elemento * 2);

// // console.log(listaNumeros);

// // const numerosPares = numeros.filter((elemento) => elemento%2 === 0);

// // console.log(numerosPares);

// const personas = [
//     { first: "Albert", last: "Einstein", nacio: 1879, murio: 1955 },
//     { first: "Isaac", last: "Newton", nacio: 1643, murio: 1727 },
//     { first: "Galileo", last: "Galilei", nacio: 1564, murio: 1642 },
//     { first: "Marie", last: "Curie", nacio: 1867, murio: 1934 },
//     { first: "Johannes", last: "Kepler", nacio: 1571, murio: 1630 },
//     { first: "Nicolaus", last: "Copernicus", nacio: 1473, murio: 1543 },
//     { first: "Max", last: "Planck", nacio: 1858, murio: 1947 },
//     { first: "Katherine", last: "Blodgett", nacio: 1898, murio: 1979 },
//     { first: "Ada", last: "Lovelace", nacio: 1815, murio: 1852 },
//     { first: "Sarah E.", last: "Goode", nacio: 1855, murio: 1905 },
//     { first: "Lise", last: "Meitner", nacio: 1878, murio: 1968 },
//     { first: "Hanna", last: "Hammarström", nacio: 1829, murio: 1909 }
// ];

// // Utiliza .map para crear un nuevo array de objetos,
// // donde cada objeto tenga solo el nombre y apellido de cada persona

// const people = personas.map((person) => {
//     return {
//         first: person.first, last: person.last
//     };
// });

// console.log(people);

// // Utiliza .map para crear un nuevo array de objetos,
// // donde cada objeto tenga solo el nombre y la fecha de nacimiento de cada persona
// const people2 = personas.map((person) => {
//     return {
//         first: person.first, nacio: person.nacio
//     };
// });

// console.log(people2);
// // Utiliza .filter para crear un nuevo array de objetos
// // donde cada{} objeto represente la persona que haya nacido durante el 1800
// const birth = personas.filter((person) => person.nacio >= 1800 && person.nacio < 1900);
// console.log(birth);

// // Utiliza .map para crear un nuevo array de objetos con el apellido
// // de cada persona y su edad (murio - nacio)

// const getOld = personas.map ((person) => {
//     return {
//         last: person.last, age: (person.murio - person.nacio)
//     };
// });
// console.log(getOld);

// // Utiliza .filter para crear un nuevo array de objetos con las personas
// // cuyo nombre sea mayor a 4 letras

// const newPeople = personas.filter((person) => person.first.length > 4);
// console.log(newPeople);

// // Utiliza .filter para crear un nuevo array de objetos con las personas
// // que hayan nacido después de 1800

// const birth2 = personas.filter((person) => person.nacio > 1800);
// console.log(birth2);

// // Utiliza .filter  para para crear un nuevo array de objetos con las personas
// // que hayan tenido una edad par (edad % 2 === 0, busca en google el operador "modulo")

// const verifyAge = personas.filter((person) => {
//     return (person.murio - person.nacio)%2 === 0;
// });
// console.log(verifyAge);