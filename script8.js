// console.log("---challenge meeting 22: Objetos---");
// console.log("Ejercicio 1");
// //Crea un objeto que tenga propiedades de una persona. Como mínimo el nombre, y la edad. 
// //Crea una propiedad dentro de este objeto cuyo valor sea una función anónima que determine si la persona es mayor de edad o no. 
// //Considera la mayoría de edad como un valor mayor o igual a 18. 
// //Esta función no debe retornar nada, solo mostrar por consola el mensaje respectivo.
// let persona = {
//     nombre: "Carolina",
//     edad: 29,
//     esMayorDeEdad: function() {
//         if (persona.edad >= 18) {
//             console.log(this.nombre + " es mayor de edad.");
//         } else {
//             console.log(this.nombre + " no es mayor de edad.");
//         }
//     }
// };

// persona.esMayorDeEdad();

// console.log("Ejercicio 2");
// //Completa la función “disponible” la cual indica si el producto está disponible o no. 
// //Un producto no está disponible cuando el valor de “cantidad” es menor o igual a cero. 
// //Mostrar los mensajes correspondientes para cada caso. 
// //Sobre el mismo sandbox, modifica la propiedad “cantidad” para que tenga un valor de cero, y vuelve a invocar la función “disponible”.


// let producto = {
//     id: "AAFC29",
//     nombre: "producto",
//     cantidad: 20,
//     disponible: function () {
//       if(producto.cantidad > 0){
//           console.log("El producto con id " + this.id + " está disponible. Quedan " + this.cantidad + " unidades.")
//       } else {
//           console.log("El producto con id " + this.id + " no se encuentra disponible.");
//       }
//     }
//   };

// // 2. Invoca la función aquí
// producto.disponible();
// // El resultado debe ser un mensaje que indique que el producto esta disponible

// // 3. Modifica la propiedad "cantidad" a 0
// producto["cantidad"] = 0;
// // 4. Vuelve a invocar la función "disponible"
// producto.disponible();
// // El resultado debe ser un mensaje que indique que el producto no esta disponible
// console.log("Ejercicio 3");
// //Declara un array de objetos. 
// //Diseña cada objeto considerando que cada uno debe representar una tarea dentro del Taskineitor. 
// //Tienes la libertad de crear las propiedades que consideres, como título o nombre de la tarea, el estado en el que se encuentra, (completada/no completada), entre otras. 
// //Trae tu array de tareas para la próxima clase.