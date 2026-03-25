// El switch es para valores exactos como "rojo", 1, "A". 
// Cuando necesitas comparar rangos como nota >= 90 siempre usa if/else.


// // Con números
// switch (numero) {
//     case 1:
//     case 2:
// }

// // Con letras/strings
// switch (letra) {
//     case "A":
//     case "B":
// }


// ---------------------------------Ejercicios----------------------------------------------------
// Crea un switch que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

// let dia = Number(prompt(" ingresar dia del calendario: "))

// switch (dia) {
//     case 1:
//         alert('lunes')
//         break;
//     case 2:
//         alert('martes')
//         break;
//     case 3:
//         alert('miercoles')
//         break;
//     case 4:
//         alert('jueves')
//         break;
//     case 5:
//         alert('viernes')
//         break;
//     case 6:
//         alert('sabado')
//         break;
//     case 7:
//         alert('domingo')
//         break;
//     default:
//     alert(`El número ${dia} no es válido, ingresa un número del 1 al 7`)
// }


// Crea un switch que reciba una calificación en letras y muestre un mensaje:
// "A" → "Excelente"
// "B" → "Muy bien"
// "C" → "Aprobado"
// "D" → "Reprobado"
// cualquier otra → "Calificación inválida"

// let calificacion = prompt('Ingresar su calificación: ').toUpperCase()

// switch (calificacion) {
//     case "A":
//         alert('Excelente')
//         break;
//     case "B":
//         alert('Muy bien')
//         break;
//     case "C":
//         alert('Aprobado')
//         break;
//     case "D":
//         alert('Reprobado')
//         break;
//     default:
//         alert(`La calificación ${calificacion} no es válida`)
// }



// Crea un switch que funcione como una calculadora simple. Recibe dos números y una operación, y muestra el resultado

// let numero1 = Number(prompt(" ingresar numero 1: "))
// let numero2 = Number(prompt(" ingresar numero 2: "))
// let operacion = prompt("Ingresa la operación (+, -, *, /): ")


// switch (operacion) {
//     case "+":
//         alert(numero1 + numero2)
//         break;

//     case "-":
//         alert(numero1 - numero2)
//         break;

//     case "*":
//         alert(numero1 * numero2)
//         break;

//     case "/":
//         if (operacion === 0){
//             alert(" este numero no es divisible")
//         } else{
//             alert (numero1 / numero2)
//         }
//         break;

//     default:
//         alert(" esta operacion matematica no existe. ingrese las que existen")
//         break;
// }


// Crea un switch que reciba un color ("rojo", "amarillo", "verde") y muestre lo que debe hacer un conductor:
// "rojo"    → "Detente"
// "amarillo"→ "Precaución"
// "verde"   → "Avanza"
// cualquier otro → "Color no válido"


// let colorSemaforo = prompt(" ingrese color que muestra el semaforo: ").toLocaleLowerCase()

// switch (colorSemaforo) {
//     case "rojo":
//         if (colorSemaforo === "rojo"){
//             alert(" detente ")
//         }
//         break;

//     case "amarillo":
//         if (colorSemaforo === "amarillo"){
//             alert(" precaucion")
//         }
//         break;

//     case "verde":
//         if (colorSemaforo === "verde"){
//             alert("avanza")
//         }
//         break;

//     default:
//         alert("color no valido")
//         break;
// }



// Recibe un mes en número (1-12) y muestra la estación:
// 12, 1, 2  → "Invierno"
// 3, 4, 5   → "Primavera"
// 6, 7, 8   → "Verano"
// 9, 10, 11 → "Otoño"
// case 12:
// case 1:
// case 2:
//     alert("Invierno")
//     break;


// let mesAño = Number(prompt(" ingresar numero del mes: "))

// switch (mesAño) {
//     case 12:
//     case 1:
//     case 2:
//          alert("invierno")
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert("primavera")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("verano")
//         break;

//     case 9:
//     case 10:
//     case 11:
//         alert("otoño")
//         break;
//     default:
//         alert(" eso no existe socio.")
//         break;
// }


// Ejercicio 6 — Piedra, papel o tijera
// Dos jugadores ingresan su elección y el switch decide quién gana.



// let jugador1 = prompt("Jugador 1: piedra, papel o tijera: ").toLowerCase()
// let jugador2 = prompt("Jugador 2: piedra, papel o tijera: ").toLowerCase()
// let combinacion = jugador1 + "-" + jugador2

// switch (combinacion) {
//     case "piedra-piedra":
//         alert("empate")
//         break;
//     case "piedra-papel":
//         alert("gana jugador 2")
//         break;
//     case "piedra-tijera":
//         alert("gana jugador 1")
//         break;
        
//     case "papel-piedra":
//         alert("gana jugador 1")
//         break;
        
//     case "papel-papel":
//         alert("empate")
//         break;
        
//     case "papel-tijera":
//         alert("gana jugador 2")
//         break;
        
//     case "tijera-piedra":
//         alert("gana jugador 2")
//         break;
        
//     case "tijera-papel ":
//         alert("gana jugador 1")
//         break;
        
//     case "tijera-tijera":
//         alert("empate")
//         break;
//     default:
//         alert("uno de los dos puso una burrada, no sirve asi.")
//         break;
// }
// ----------------------------------Clase de pedro 23/3/26----------------------------------------

// alert("Bienvenido a esta escuela")

// let nota = Number(prompt("Introduzca su calificacion: "))

// switch (true) {
//     case nota >= 90 && nota <= 100:
//         alert("Excelente calificacion")
//         break;
//     case nota > 80 && nota <= 90:
//         alert("Tienes potencial")
//         break;
//     case nota >= 70 && nota <= 80:
//         alert("Puedes mejorar")
//         break;
//     default:
//         alert("En completivo")
//         break;
// }


// let dia = new Date().getDay();
// dia = Number(prompt(" Ingresa un dia de semana en numeros: "))

// switch (true) {
//     case dia == 0:
//         alert("Domingo")
//         break;

//     case dia == 1:
//         alert("Lunes")
//         break;
//     case dia == 2:
//         alert("Martes")
//         break;
//     case dia == 3:
//         alert("Miercoles")
//         break;
//     case dia == 4:
//         alert("Jueves")
//         break;
//     case dia == 5:
//         alert("Viernes")
//         break;
//     case dia == 6:
//         alert("Sabado")
//         break;
//     default:
//         break;
// }

// ---------------------------------------TAREA PARA LO MUCHACHO, VALIDAR LA FECHA INGRESADA Y VERIFICAR LA ESTACION EL ANIO
// ---------------------------------------TAREA PARA LO MUCHACHO, CREAR UNA CALCULADORA DONDE SE LE PIDA AL USUARIO LOS NUMEROS Y LA OPERACION,
// ---------------------------------------A REALIZAR (SUMA, RESTA, DIVISION, MULTIPLICACION, POTENCIA)




// -- CALCULADORA
let numero1 = Number(prompt(" ingresar numero 1: "))
let numero2 = Number(prompt(" ingresar numero 2: "))
let operacion = prompt("Ingresa la operación (+, -, *, /): ")
switch (operacion) {
    case "+":
        alert(numero1 + numero2)
        break;

    case "-":
        alert(numero1 - numero2)
        break;

    case "*":
        alert(numero1 * numero2)
        break;

    case "/":
        if (operacion === 0){
            alert(" este numero no es divisible")
        } else{
            alert (numero1 / numero2)
        }
        break;
    case "**":
        alert( numero1 ** numero2)
        break;
    default:
        alert(" esta operacion matematica no existe. ingrese las que existen")
        break;
}
