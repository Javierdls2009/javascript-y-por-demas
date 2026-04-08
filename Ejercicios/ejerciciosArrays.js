
// ----------------------------------------------------------------------------------------------------------
//                                            ejercicios practica

//                                              Lista de compras
// Crea un array con 3 frutas. Pide al usuario que escriba una fruta con prompt y dile
//  con un alert si está o no en la lista.


// let frutas = ["manzana", "pera", "uva"]; 
// let frutaUsuario = prompt("¿Qué fruta deseas?").toLowerCase();

// if (frutas.includes(frutaUsuario)) {
//     alert("Ya tienes " + frutaUsuario + " en tu carrito de compra.");
// } else {
//     alert("Agregaste " + frutaUsuario + " al carrito de compras.");
// }

// -------------------------------------------------------------
//                                                      Agregar y eliminar
// Crea un array con 3 nombres. Luego:

// Pide un nombre con prompt y agrégalo al final con .push()
// Elimina el primer nombre con .shift()
// Muestra el array final con alert

// let nombres = ['juan','pedro','javier'];
// let nombreUsuario = prompt('ingresa tu nombre: ')
// nombres.push(nombreUsuario);
// nombres.shift();
// alert (nombres);
//--------------------------------------------------------------------
//                                                    Lista de compras
// Crea un array vacío llamado carrito. Pide 3 productos al usuario con prompt y agrégalos al carrito con .push().
//  Al final muestra con alert cuántos productos tiene el carrito usando .length.
// let carrito = [];

// let productoUsuario1 = prompt("Ingresa el producto 1: ");
// let productoUsuario2 = prompt("Ingresa el producto 2: ");
// let productoUsuario3 = prompt("Ingresa el producto 3: ");

// if (productoUsuario1 != "" && productoUsuario1 != null) {
//     carrito.push(productoUsuario1);
// }
// if (productoUsuario2 != "" && productoUsuario2 != null) {
//     carrito.push(productoUsuario2);
// }
// if (productoUsuario3 != "" && productoUsuario3 != null) {
//     carrito.push(productoUsuario3);
// }

// alert("Tienes " + carrito.length + " productos: " + carrito);

//                                                      Lista de amigos
// Crea un array con 2 amigos. Pide un nombre con prompt y agrégalo con .push(). Muestra con alert:

// let amigos = ['juancito', 'javier']
// let amigoNuevo = prompt('Cual es tu nombre?: ').toLowerCase()

// amigos.push(amigoNuevo)

// alert("Tienes " + amigos.length + " amigos en tu lista: " + amigos);


//                                                  Control de capacidad
// Crea un array llamado bus con 3 pasajeros. Pide un nombre con prompt y:

// Si el bus tiene menos de 5 pasajeros → agrégalo con .push() y
//  muestra "Bienvenido [nombre], hay [length] pasajeros"
// Si ya tiene 5 o más → muestra "Lo sentimos, el bus está lleno"

// let bus = [' villero',' el monkey',' lolo']
// let pasajeroNuevo = prompt('cual es tu nombre?: ').toLowerCase()

// if (bus.length < 5){
//   bus.push(pasajeroNuevo);
//   alert('Bienvenido ' + pasajeroNuevo + ' , hay ' + bus.length + ' pasajeros.')
// } else {
//   alert(' Lo sentimos, el bus esta lleno.')
// }

// alert('Lista: ' + bus)


//                                                    Lista de invitados
// Crea un array con 3 nombres. Pide un nombre con prompt y:

// Si ya está en la lista → alert "Ya está en la lista"
// Si no está → agrégalo con .push() y muestra "[nombre] fue agregado, ahora hay [length] invitados"

// let listaFiesta = ['pablo', 'lolo', 'javier']
// let nombreInvitado = prompt('Cual es tu nombre?: ').toLowerCase()

// if (listaFiesta.includes(nombreInvitado)){
//   alert('ya estas en la lista.')
// } else{
//   listaFiesta.push(nombreInvitado);
//   alert(nombreInvitado + ' fuiste agregado a la lista de invitados. Ahora hay ' + listaFiesta.length + ' invitados.' )
// }


//                                                    Tienda de videojuegos
// Crea un array con 3 videojuegos. Pide uno con prompt y:

// Si ya lo tienes → alert "Ya tienes ese juego"
// Si no lo tienes → agrégalo y muestra "Agregaste [juego], tienes [length] juegos en total"

// let videojuegosCarrito = ['minecraft', 'fortnite', 'valorant']
// let videojuegosUsuario = prompt('Agregar videojuego a tu carrito: ').toLowerCase()

// if (videojuegosCarrito.includes(videojuegosUsuario)){
//   alert('ya tienes ese juego')
// } else{
//   videojuegosCarrito.push(videojuegosUsuario);
//   alert('agregaste ' + videojuegosUsuario + '. Ahora tienes ' + videojuegosCarrito.length + ' juegos en total.')
// }


//                                                    Lista negra
// Crea un array llamado listaNegra con 3 nombres prohibidos. Pide un nombre con prompt y:

// Si está en la lista negra → alert "Acceso denegado"
// Si no está → alert "Bienvenido [nombre]"

// let listaNegra = ['pedro', 'javier', 'lola']
// let nombre = prompt('cual es tu nombre?: ')

// if (listaNegra.includes(nombre)){
//   alert('Acceso denegado')
// } else{
//   listaNegra.push(nombre);
//   alert('Bienvenido ' + nombre)
// }

// Crea un array con 5 colores y muestra el primero y el último con alert.


// let colores = ['rojo','verde','marron','rosado','azul']
// alert(colores[0], colores[4])
// alert(colores[4])


// Crea un array con 4 nombres y muestra cuántos hay con .length.

// let nombres = ['pedro','javier','lolo','lola']
// alert(nombres.length)


// -----------------------------------------------------------------------------------------------------
//                                                    
