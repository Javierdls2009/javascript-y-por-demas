  // let contador = 0;

// while (contador < 5) {
//   console.log("Contador: " + contador);
//   contador++;
// }


// Pide un número al usuario y usa un bucle while para imprimir en consola todos los números del 1 hasta ese número.
// Ejemplo: si el usuario escribe 4, debe mostrar:
// 1
// 2
// 3
// 4


// let numero = Number(prompt("Ingresa un número: "));

// let contador = 1;

// while (contador <= numero) {
//     console.log(contador);
//     contador++;
// }


// Crea un juego simple: el número secreto es 7. Usa un bucle while para seguir pidiendo al usuario que adivine el número hasta que lo logre. Cuando acierte, muestra un alert que diga "¡Correcto!".
// Ejemplo de flujo:
// prompt → "3"  (sigue preguntando)
// prompt → "9"  (sigue preguntando)
// prompt → "7"  (muestra alert "¡Correcto

// let numeroSecreto = 7;
// let input = prompt("Ingresa el número secreto del 1 al 10: "); // se coloca input para que detecte la variable como string y no como numero, para que si el usuario
//                                                             // para que si el usuario quiere salir, lo deje.

// while (input != null && Number(input) != numeroSecreto) {
//     input = prompt("Sigue intentándolo, ingresa otro número: ");
// }

// if (input == null) {
//     alert("Cancelaste el juego.");
// } else {
//     alert("Felicidades, lo adivinaste");
// }



// Pide al usuario que escriba su nombre. Si deja el campo vacío o cancela, vuelve a pedirlo. 
// Cuando escriba algo, muestra un alert con "Bienvenido, [nombre]!".
// Aquí el do...while es perfecto porque necesitas preguntar al menos una vez.

// do {
//     // siempre entra al menos una vez
// } while (condición);
// ```
// El bloque se ejecuta **sí o sí** la primera vez, y luego revisa si debe repetirse.

// ---

// ### En este ejercicio puntual

// Necesitas pedirle el nombre al usuario **sí o sí** 
// al menos una vez antes de saber si escribió algo o no.
//  No puedes saber si dejó el campo vacío sin haberlo preguntado primero.

// Con `do...while` queda natural:
// ```
// 1. Pide el nombre        ← siempre ocurre
// 2. ¿Está vacío o canceló? → vuelve al paso 1
// 3. Si escribió algo → muestra bienvenida

// let nombre;

// do {
//     nombre = prompt("ingresa tu nombre")
// } while (nombre == null || nombre == "");

// alert("¡Bienvenido " + nombre + "! Un placer tenerte.");


// Pide un número al usuario y haz una cuenta regresiva desde ese número hasta 0,
// imprimiendo cada número en consola.
// Ejemplo: si el usuario escribe 5:
// 5
// 4
// 3
// 2
// 1
// 0

// let numeroUsuario = Number(prompt("Ingresa un número: "));
// let contador = numeroUsuario;

// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }

// contador = numeroUsuario — empieza desde arriba
// contador >= 0 — baja hasta llegar a 0
// contador-- — resta en vez de sum


// Pide un número al usuario. 
// Si escribe un número negativo o cero, 
// sigue pidiéndolo hasta que escriba uno positivo. Cuando lo escriba, 
// muestra un alert con "¡Gracias! Tu número es: [numero]".

// let numero = Number(prompt("Ingrese su numero positivo: "))

// while ( numero <= 0 ) {
//      numero = Number(prompt("vuelve a ingresar el numero: "))
// }

// alert("Gracias! Tu número es: " + numero)




// Pide dos números al usuario y muestra su suma con un alert.
//  Luego pregunta con un confirm "¿Quieres hacer otra suma?". 
// Si acepta, repite. Si cancela, muestra "¡Hasta luego!".
// Aquí usarás do...while junto con confirm — recuerdas que devuelve true o false.

// do {
//     let num1 = Number(prompt("Ingresa el primer número: "));
//     let num2 = Number(prompt("Ingresa el segundo número: "));
//     alert("La suma es: " + (num1 + num2));
// } while (confirm("¿Quieres hacer otra suma?"));

// alert("¡Hasta luego mi pequeno saltamontes!");



//  Tabla de multiplicar
// Pide un número al usuario y muestra su tabla de multiplicar del 1 al 10 en consola.
// Ejemplo: si el usuario escribe 3:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// ...
// 3 x 10 = 30

// Dime una cosa — si yo te digo "¿cuánto es 3 x 4?", ¿cómo lo calculas en JavaScript?

// let numero = Number(prompt("Ingresa un número: "));
// let contador = 1;

// while (contador <= 10) {
//     console.log(numero + " x " + contador + " = " + numero * contador);
//     contador++;
// }

// Adivina la palabra
// El programa tiene una palabra secreta "javascript". 
// Pide al usuario que la adivine. Si falla, dile "Incorrecto, sigue intentando". 
// Cuando acierte muestra "¡Lo lograste!".

// let palabra_secreta = 'javascript'
// let palabra_secreta_usuario = prompt("ingresa la palabra que creas que sea la correcta: ")

// while ( palabra_secreta_usuario != palabra_secreta) {
//     palabra_secreta_usuario = prompt("incorrecto, sigue intentado. ")
// }

// alert("pummm chakalaca, adivinaste la palabra. felicidades!")


//  Menú de opciones
// Muestra un menú con prompt así:
// 1. Saludar
// 2. Despedirse
// 3. Salir
// Según lo que escriba el usuario:

// 1 → alert "¡Hola!"
// 2 → alert "¡Adiós!"
// 3 → termina el programa

// Repite el menú hasta que elija 3.


// let opcion;
// do {
//     opcion = prompt("1. Saludar\n2. Despedirse\n3. Salir");

//     if (opcion == "1") {
//         alert("Hola")
//     } else if (opcion == "2") {
//         alert("Adios")
//     } else if (opcion != "3") {
//     alert("Opción inválida, elige 1, 2 o 3");
//     }
// } while (opcion != "3");

// alert("¡Hasta luego!");

//  Contador de intentos
// Igual que el juego del número secreto, 
// pero esta vez cuenta cuántos intentos necesitó el usuario y al final muestra 
// "¡Lo lograste en X intentos!".



// let numeroSecreto = 7
// let numeroUsuario = prompt("Ingresa un número: ");
// let contador = 1;

// while (numeroUsuario != numeroSecreto) {
//     numeroUsuario = prompt('mua mu muaa, inngrese nuevamente el numero: ')
//     contador++;
// }

// alert("lo lograste en " + contador + " intentos!.")


// Números pares
// Pide un número al usuario y muestra en consola todos los números pares desde el 1 hasta ese número.
// Ejemplo: si el usuario escribe 10:
// 2
// 4
// 6
// 8
// 10
//un número es par cuando el residuo de dividirlo entre 2 es 0.
// numero % 2 == 0.

// let numero = Number(prompt("Ingresa un número: "));
// let contador = 1;

// while (contador <= numero) {
//     if (contador % 2 == 0) {
//         console.log(contador);
//     }
//     contador++;
// }

// Número mayor
// Pide números al usuario uno por uno con un do...while.
//  Después de cada número pregunta con confirm si quiere ingresar otro.
//  Al final muestra el número más alto que ingresó.

// Pista: declara let mayor = 0 y dentro del bucle compara con if (numero > mayor).
let mayor = 0;

do {
    let numero = Number(prompt("Ingresa un número: "));
    
    if (numero > mayor) {
        mayor = numero; // actualiza el mayor
    }

} while (confirm("¿Quieres ingresar otro número?"));

alert("El número mayor fue: " + mayor);