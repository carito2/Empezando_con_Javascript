// //MEETING 22 --> OBJETOS
// console.log("---BURGER FACTORY---");
// // Vamos a crear una función que nos permita generar una hamburguesa en formato de objeto.
// // La función va a tomar los ingredientes de la hamburguesa y retornar el objeto conteniendo las propiedades de la misma. 

// const burgerFactory = (breadType, meat, tomato, lettuce, cheese, other) => {
//     return {
//         'Bread types': breadType,
//         'Meat': meat,
//         'Tomato': tomato,
//         'Lettuce': lettuce,
//         'Cheese': cheese,
//         'Other': other
//     };
// };

// let burger = burgerFactory('Pan molde', 0, true, true, false, 'Ninguno');
// console.log(burger);

// function burgerFactory2(carnes, tomate, nombre) {
//     let vegetariana;
//     if (carnes===0) {
//         vegetariana = true;
//     } else {
//         vegetariana = false;
//     }
//     return {
//         cantidadCarne: carnes,
//         vegetariana: vegetariana,
//         tomate: tomate,
//         nombre: nombre
//     };
// };

// let hamburguesa = burgerFactory2(0, true, 'veggie power');
// console.log(hamburguesa);

// console.log("---BURGER FACTORY V0.1---");
// Partiendo del ejemplo anterior, extiende la función para que además de los valores especificados, tome los siguientes:
// - cantidad de fetas de panceta/tocineta (número)
// - lechuga (booleano)
// - pepinillo (booleano)
// - huevo (booleano)
// - tipo de pan (string)
// Para que una burger se considere vegetariana, la fábrica debe verificar si la cantidad de carnes, y fetas de panceta son igual a 0

// const burgerFactory3 = (breadType, meat, bacon, tomato, lettuce, pickle, eggs) => {
//     let vegetarian;
//     if (meat === 0 && bacon === 0) {
//         vegetarian = true;
//     } else {
//         vegetarian = false;
//     }
//     return {
//         'Vegetarian': vegetarian,
//         'Bread types': breadType,
//         'Meat': meat,
//         'Bacon': bacon,
//         'Tomato': tomato,
//         'Lettuce': lettuce,
//         'Pickle': pickle,
//         'Eggs': eggs
//     };
// };

// const burgerAdd = ()
// let burger2 = burgerFactory3('Pan molde', 0, 1, true, true, false, true);
// console.log(burger2);

// console.log("---BURGER FACTORY V0.2---");
// // Nuestra máquina funciona bien, pero produciendo una hamburguesa a la vez, no logramos satisfacer las demandas de nuestros comensales.
// // Vamos a ajustar nuestra aplicación para producir un conjunto de hamburguesas en serie.
// // Combinaremos todos los conceptos de Javascript que hemos aprendido hasta ahora en un solo ejercicio: arrays, iteraciones, funciones y objetos.
