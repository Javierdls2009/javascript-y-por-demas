// let animales = ['chanchito', 'caballo'];
// console.log (animales);
// console.log (animales[0]);
// animales[2] = 'dragon';
// console.log (animales); 

// animales[10] = 'pez';
// console.log (animales[7]);
// console.log (typeof animales);
// console.log (animales.length);
// -----------------------------------------------------------------------------------------------------

// // Cuántos elementos tiene
// console.log(frutas.length) //

// // Agregar al final
// frutas.push("naranja")

// // Eliminar el último
// frutas.pop()

// // Agregar al inicio
// frutas.unshift("sandía")

// // Eliminar el primero
// frutas.shift()






// -------------------------------------------------------------------------------------------------
// viernes con pedro 20/3/26

// let frutas = ['manzana','pera','mamon','naranja','lechoza','uva'];


// let numeros = [];


// console.log(frutas[3]); //busco por indice

// console.log(frutas.length); // para ver la longitud de un arreglo

// let producto1 = ['camisa', 10, 's150']
// let producto2 = ['pantalon', 50, 's120']
// let producto3 = ['t-shirt', 5, 'w105']
// let producto4 = ['blusa', 3, 'f450']

// let tienda = [producto1, producto2, producto3, producto4]

// console.log(tienda)

// producto4.push('Amarilla') // push agrega un elemento al final del arreglo

// // crear una lista de articulos para el supermercado de minimo 5 items
// // con el metodo prompt() pedie al usuario que ingrese un articulo para agregar a la lista
// // si el articulo ya esta en la lista (metodo: array.icludes()) avisarle al usuario que el articulo ya esta
// // si no, agregar el articulo a la lista y mostrarle al ususario a lista de todo lo que tiene para comprar.


// let supermercado = ['camisa','pantalon','t-shirt','blusa','zapatos']


// let agregar = prompt('ingresar producto que desea agregar al carrito: ').toLowerCase()

// if (supermercado.includes(agregar)){
//     alert('el producto ya esta agregado al carrito de compras suyo')
// } else{
//     supermercado.push(agregar);
// }

// alert(supermercado)

// crear un sistema que permita ingresar nombres de estudiantes
// se debe verificar si los nombres ya estan agregados 
// agregar los que no estan, contar cuantos estudiantes hay y determinar si 
// se alcanzo un minimo de estud14iantes

// let estudianteNuevo = prompt('Ingresar tu nombre:').toLowerCase();

// let escuela = ['pedro', 'luis', 'alfonso', 'manolo', 'josefina', 'pitufina', 'grunon', 'leo', 'mario'];
// const minimoEstudiantes = 10;

// if (escuela.includes(estudianteNuevo)) {
//   alert('Este estudiante ya existe en la base de datos.');
// } else if (escuela.length >= minimoEstudiantes) {
//   alert('No se puede agregar, se alcanzó el límite de ' + minimoEstudiantes + ' estudiantes.');
// } else {
//   escuela.push(estudianteNuevo);
//   alert('Bienvenido, ' + estudianteNuevo + '.');
// }

// -------------------------------------------------------------------------------------------------------------
// 22/3/26 domingo en la noche, casa

let frutas = ["manzana", "pera", "uva"]

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

// Forma más moderna
frutas.forEach(fruta => {
    alert(fruta)
})