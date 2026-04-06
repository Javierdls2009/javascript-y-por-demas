// ¿Qué es una función?
// Una función es un bloque de código con nombre que puedes reutilizar las veces que quieras sin repetir el código.
// Imagínalo como una receta — la escribes una vez y la usas cuando quieras.

// Cómo se escribe
// function saludar() {
//     alert("¡Hola!");
// }
// Eso solo define la función. Para ejecutarla la tienes que llamar:
// saludar(); // ahora sí se ejecuta

// Funciones con parámetros
// Puedes pasarle información a la función:
// function saludar(nombre) {
//     alert("¡Hola, " + nombre + "!");
// }

// saludar("Carlos"); // muestra "¡Hola, Carlos!"
// saludar("María");  // muestra "¡Hola, María!"
// nombre es el parámetro — es como una variable que recibe el valor que le pasas.

// Funciones que devuelven un valor
// function sumar(num1, num2) {
//     return num1 + num2;
// }

// let resultado = sumar(3, 5);
// console.log(resultado); // 8
// return devuelve el resultado para que puedas usarlo después.





// Crea una función llamada saludar que reciba un nombre como parámetro y muestre un alert con 
// "¡Hola, [nombre]! Bienvenido.". Luego llámala con tu nombre.

// function saludar(nombre) {
//     alert("¡Hola " + nombre + ', ' +" Bienvenido.")
// }

// saludar("javier")


// Función que devuelve un valor
// Crea una función llamada multiplicar que reciba dos números y devuelva su multiplicación.
//  Luego guarda el resultado en una variable e imprímelo en consola.

// function multi(num1, num2) {
//     return num1 * num2
// }
// let resultado = multi(3,10)
// console.log(resultado);

// Función con bucle
// Crea una función llamada contarHasta que reciba un número y use un 
// while para imprimir en consola todos los números del 1 hasta ese número.


// function contarHasta(numero) {
//     let contador = 1
//     while (contador <= numero) {
//   console.log("Contador: " + contador);
//   contador++;
// }
// }


//Función con condicional
// Crea una función llamada esPar que reciba un número y devuelva true si es par o false si es impar.
//  Luego imprímelo en consola.

// function esPar(numero) {
//     if (numero % 2 == 0){
//         return true
//     } else {
//         return false
//     }
// }

// function esPar(numero) {
//     if (numero % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(esPar(3));  // false
// console.log(esPar(4));  // true


// Funciones dentro de funciones
// Crea dos funciones:

// cuadrado(numero) — devuelve el número multiplicado por sí mismo
// imprimirCuadrado(numero) — llama a cuadrado e imprime el resultado en consola

// Ejemplo: imprimirCuadrado(4) debe imprimir 16.

// function cuadrado(numero) {
//     return numero * numero;
// }

// function imprimirCuadrado(numero) {
//     console.log(cuadrado(numero));
// }

// imprimirCuadrado();
