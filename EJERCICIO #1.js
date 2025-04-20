
//Problema 1: Eliminar el Último Registro de una Lista de Ventas

//Definimos nuestra lista
let ventas = ["Camisa", "Pantalón", "Zapatos", "Sombrero"];

// Eliminamos el último elemento usando el método pop()
ventas.pop();

// Mostramos el resultado en consola
console.log(ventas);

//Problema 2: Agregar un Nuevo Registro al Inicio y al Final de la Lista de Ventas


ventas.unshift("Bufanda");

// Agregar "Guantes" al final
ventas.push("Guantes");

// Mostrar el array actualizado
console.log(ventas);

//Problema 3: Ordenar e Invertir los Registros de Ventas

// Ordenamos alfabéticamente
ventas.sort();

// Invertimos el orden
ventas.reverse();

// Mostramos el resultado final
console.log(ventas);