// Bucles
// Un bucle repite código varias veces. Hay 3 tipos principales:

// 1. for
// Úsalo cuando sabes cuántas veces quieres repetir:

// javascript
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// 0, 1, 2, 3, 4
// // // Las 3 partes:

// let i = 0 → empieza en 0
// i < 5 → repite mientras i sea menor que 5
// i++ → suma 1 en cada vuelta
// 2. while
// Úsalo cuando no sabes cuántas veces repetir, solo sabes cuándo parar:

// javascript
// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }
// // 0, 1, 2, 3, 4
// ⚠️ Cuidado: si olvidas el i++ el bucle nunca para y congela el navegador.

// 3. do while
// Igual que while pero siempre ejecuta al menos una vez:

// javascript
// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 5)
// // 0, 1, 2, 3, 4
// La diferencia con while:

// javascript
// // while — si la condición es falsa desde el inicio, no ejecuta nada
// while (false) {
//     console.log("esto nunca se ejecuta")
// }

// // do while — ejecuta al menos una vez aunque la condición sea falsa
// do {
//     console.log("esto se ejecuta una vez")
// } while (false)


// ----------------------------------------------------

// Usa un for para mostrar los números delnumero 10.



// for( let num = 1; num < 10; num++ ){
//     console.log(num)
// }

// Usa un for para mostrar solo los números pares del 1 al 20.
// 💡 Pista: un número es par cuando numero % 2 === 0

// for(let num = 1; num <=20; num++){
//     if (num % 2 === 0){
//         console.log(num)
//     }
// }

// Usa un while para mostrar una cuenta regresiva del 10 al 0.
// 10, 9, 8, 7... 0 → "¡Despegue!"

let cont = 10  // empieza en 10

while (cont >= 0) {  // repite mientras sea mayor o igual a 0
    console.log(cont)  // muestra el número
    cont--  // resta 1
}

console.log("¡Despegue!")  // fuera del while