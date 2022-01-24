//Importaciones
import { llenarTienda } from "./llenadoTienda.js"
import { ampliarInfoProducto } from "./ampliarInfoProducto.js"
import { agregarProducto } from "./agregarproducto.js"
import { verCarrito } from "./vercarrito.js"


//Entradas globales
let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProducto'))
let modalCarrito = new bootstrap.Modal(document.getElementById('modalCarrito'))
let botonAgregarCarrito = document.getElementById("botonAgregarCarrito")
let filaContenedoraProductos = document.getElementById("fila")
let botonCarrito = document.getElementById("botonCarrito")

let carrito = []
let productoSeleccionado = {}

//Se llena la tienda
llenarTienda()

//se detecta clic en algun producto
filaContenedoraProductos.addEventListener("click", function (event) {
    productoSeleccionado = ampliarInfoProducto(event)
    modalInfoProducto.show()
})

//se detecta clic en agregar producto al carrito
botonAgregarCarrito.addEventListener("click", function () {

    let cantidad = document.getElementById("cantidadProducto").value
    productoSeleccionado.cantidad = Number(cantidad)

    carrito.push(productoSeleccionado)

    agregarProducto(carrito)

    modalInfoProducto.hide()

})

//se detecta clic en el boton ver carrito
botonCarrito.addEventListener("click", function () {

    modalCarrito.show()
    verCarrito(carrito)

})