                                                            // 1. Verificar si un número es par o impar
// javascriptlet numero = 7;

// if (numero % 2 === 0) {
//   console.log("Es par");
// } else {
//   console.log("Es impar");
// }
// "Es impar"
// --------------------------------------------------------------------------------------------------------------------------
                                                        // 2. Verificar si un usuario puede entrar a un sitio
// let edad = 15;
// let tienePermiso = false;

// if (edad >= 18 || tienePermiso) {
//   console.log("Bienvenido");
// } else {
//   console.log("Acceso denegado");
// }
// "Acceso denegado"
// --------------------------------------------------------------------------------------------------------------------------
                                                        // 3. Clasificar una nota escolar
// let nota = 83;

// if (nota >= 90) {
//   console.log("A - Excelente");
// } else if (nota >= 80) {
//   console.log("B - Muy bien");
// } else if (nota >= 70) {
//   console.log("C - Bien");
// } else if (nota >= 60) {
//   console.log("D - Regular");
// } else {
//   console.log("F - Reprobado");
// }
// "B - Muy bien"

// --------------------------------------------------------------------------------------------------------------------------
                                                        // 4. Calcular el precio con descuento

// miembro y cupon 30% (0.70)                                                        
// miembro = 15% (0.85)
// cupon = 10%(0,90)
// 


// let precio = 100;
// let esMiembro = true;
// let cupón = true;

// if (esMiembro && cupón) {
//   precio = precio * 0.70; // 30% de descuento
// } else if (esMiembro) {
//   precio = precio * 0.85; // 15% de descuento
// } else if (cupón) {
//   precio = precio * 0.90; // 10% de descuento
// } else {
//   console.log("Sin descuento");
// }

// console.log(`Precio final: $${precio}`);
// "Precio final: $70"

// --------------------------------------------------------------------------------------------------------------------------

/*
realizar un descuento a los usuarios

1- los usuarios que son miembros despues de 1000 tienen un 10%
2- los usuarios que son miembros despues de 4999 tiene un 25%
3- los usuarios que no son miembros y compraron mas de 4999 15%
4- los usuarios que no son miembros y no pasan de 5000 no tienen descuento

*/

let esMiembro = prompt(" sos miembro? (si/no)").toLowerCase() === "si";
let total = Number(prompt("ingresar monto de la compra: "));
let desc = 0;

if (esMiembro && total > 4999) {
    desc = 0.25;
} else if (esMiembro && total > 1000) {
    desc = 0.10;
} else if (!esMiembro && total > 4999) {
    desc = 0.15;
}

let final = total - (total * desc);
alert(`Descuento: ${desc * 100}% | Total a pagar: ${final}`);