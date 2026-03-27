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

// let bienvenida = "Bienvenidos a la pagina del calendario."

// alert(bienvenida)

// let mes = Number(prompt("ingresar mes de la estacion del anio en numero: ")) 

// switch (mes) {
//     case 12:
//     case 1:
//     case 1:
//         alert('invierno')        
//         break;

//     case 3:
//     case 4:
//     case 5:
//         alert("Primavera")
//         break;
    
//     case 6:
//     case 7:
//     case 8:
//         alert("verano")
//         break;
    
//     case 9:
//     case 10:
//     case 11:
//         alert("otonio")
//         break;
//     default:
//         alert("no existe, ingrese el mes correcto.")
//         break;
// }


// let num1 = Number(prompt(" ingresar numero 1"))
// let num2 = Number(prompt(" ingresar numero 2"))
// let operacion = prompt(" ingresar la operacion matematica que desea realizar. +,-,*,/,** ")


// switch (operacion) {
//     case "+":
//         alert(num1 + num2)
//         break;

//     case "-":
//         alert(num1 - num2)
        
//     case "*":
//         alert(num1 * num2)
        
//     case "/":
//         if (operacion === 0){
//             alert('este numero no es divisible')
//         } else{
//             alert(num1 / num2)
//         }
        
//     case "**":
//         alert(num1 ** num2)
//     default:
//         alert(" esa operacion matematica no esta registrada en la calculadora. ingrese una de las que estan. ")
//         break;
// }




//                                                      Conversor de moneda
// El usuario ingresa una moneda y el switch muestra el valor en dólares:
// "euro"      → "1 euro = $1.08"
// "peso"      → "1 peso = $0.05"
// "libra"     → "1 libra = $1.27"
// "yen"       → "1 yen = $0.007"
// otro        → "Moneda no disponible"

// let moneda = prompt('Ingresar el tipo de moneda: ').toLowerCase()
// switch (moneda) {
//     case "euro":
//         alert("1 euro = $1.08")
//         break;

//     case "peso":
//         alert("1 peso = $0.05")
//         break;

//     case "libra":
//         alert("1 libra = $1.27")
//         break;

//     case "yen":
//         alert("1 yen = $0.007")
//         break;

//     default:
//         alert("moneda no disponible")
//         break;
// }

//                                                  Menú de restaurante
// El usuario elige un plato y el switch muestra el precio y los ingredientes:
// "pizza"     → "$10 - masa, tomate, queso"
// "burger"    → "$8 - pan, carne, lechuga"
// "pasta"     → "$9 - fideos, salsa, albahaca"
// "ensalada"  → "$6 - lechuga, tomate, aceite"
// otro        → "Plato no disponible"


// let plato = prompt("ingresar plato que desea: ").toLowerCase()

// switch (plato) {
//     case "pizza":
//         alert("$10 - masa, tomate, queso")
//         break;
//     case "burger":
//         alert("$8 - pan, carne, lechuga")
//         break;

//     case "pasta":
//         alert("$9 - fideos, salsa, albahaca")
//         break;
        
//     case "ensalada":
//         alert("$6 - lechuga, tomate, aceite")
//         break;
        
//     default:
//         alert("Plato no disponible")
//         break;
// }

//                                              Clasificación de temperatura
// El usuario ingresa una temperatura y el switch muestra cómo está el clima:
// menor a 0       → "Bajo cero, abrígate bien"
// 0 - 15          → "Frío"
// 16 - 25         → "Agradable"
// 26 - 35         → "Caluroso"
// mayor a 35      → "Calor extremo"

// let temperatura = Number(prompt(" ingresar que temperatura esta haciendo: "))

// switch (true) {
//     case temperatura < 0:
//         alert("Bajo cero, abrígate bien")
//         break;
//     case temperatura >= 0 && temperatura <= 15:
//         alert("Frío")
//         break;

//     case temperatura >= 16 && temperatura <= 25:
//         alert("agradable")
//         break;

//     case temperatura >= 26 && temperatura <= 35:
//         alert("caluroso")
//         break;
//     default:
//         alert("calor")
//         break;
// }


//                                                 Sistema de descuentos
// El usuario ingresa su tipo de cliente y el monto de su compra. El switch calcula el descuento:
// "vip"        → 30% de descuento
// "frecuente"  → 15% de descuento
// "normal"     → 5% de descuento
// otro         → "Tipo de cliente no válido"
// 💡 Muestra el monto original, el descuento y el monto final.


let tipo = prompt("¿Qué tipo de cliente eres? (vip, frecuente, normal)");
let monto = Number(prompt("¿Cuál es el monto de tu compra?"));
let descuento = 0

switch (tipo.toLowerCase()) {
    case "vip":
        descuento = monto * 0.30
        break;

    case "frecuente":
        descuento = monto * 0.15
        break;

    case "normal":
        descuento = monto * 0.05
        break;
    default:
        alert("Tipo de cliente no válido")
        break;
}

let total = monto - descuento

alert("Monto original: " + monto);
alert("Descuento: " + descuento);
alert("Monto final: " + total);

//                                                      Calculadora de IMC
// El usuario ingresa su peso y altura, calculas el IMC (peso / altura²) y el switch muestra:
// menor a 18.5  → "Bajo peso"
// 18.5 - 24.9   → "Peso normal"
// 25 - 29.9     → "Sobrepeso"
// 30+           → "Obesidad"

let peso = Number(prompt(" ingrese su peso: "))
let altura = Number(prompt(" ingrese su altura: "))
let imc = peso / (altura * altura)
switch (true) {
    case imc >= 18.5:
        alert("Bajo peso")
        break;

    case imc > 18.5 && imc <= 24.9:
        alert("peso normal")
        break;

    case imc >= 25 && imc <= 29.9:
        alert("sobrepeso")
        break;
    default:
        alert("obesidad")
        break;
}

//                                                   Sistema de votación
// El usuario ingresa su edad y país. El switch determina si puede votar:
// "dominicana" + mayor de 18  → "Puede votar"
// "dominicana" + menor de 18  → "No puede votar"
// "usa" + mayor de 18         → "Puede votar"
// "usa" + menor de 18         → "No puede votar"
// otro país                   → "País no registrado"

let edad = Number(prompt(" ingrese su edad: "))
let pais = prompt(" ingrese su nacionalidad: usa o dominicana: ").toLowerCase()

switch (true) {
    case pais === "dominicana" && edad >= 18:
        alert("puede votar")
        break;

    case pais === "dominicana" && edad < 18:
        alert("no puede votar")
        break;
    
    case pais === "usa" && edad >= 18:
        alert("puede votar")
        break;
    
    case pais === "usa" && edad < 18:
        alert("no puede votar")
        break;
        
    default:
        alert("pais no registrado")
        break;
}

//                                    Juego de rol
// El usuario elige una clase de personaje y el switch muestra sus estadísticas:
// "guerrero"  → vida: 100, ataque: 80, defensa: 70
// "mago"      → vida: 60, ataque: 100, defensa: 40
// "arquero"   → vida: 80, ataque: 90, defensa: 50
// "sanador"   → vida: 90, ataque: 40, defensa: 60
// otro        → "Clase 

let clase_personaje = prompt("ingrese que clase de personaje quiere ser: guerrero, mago, arquero, sanador, otro").toLocaleLowerCase()

switch (clase_personaje) {
    case "mago":
        alert("vida: 60, ataque: 100, defensa: 40")
        break;

    case "guerrero":
        alert("vida: 100, ataque: 80, defensa: 70")
        break;

    case "arquero":
        alert("vida: 80, ataque: 90, defensa: 50")
        break;

    case "sanador":
        alert("vida: 90, ataque: 40, defensa: 60")
        break;

    default:
        alert("Clase no disponible")
        break;
}