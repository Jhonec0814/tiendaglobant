//Importaciones
import { llenarTienda } from "./llenadoTienda.js"
import { ampliarInfoProducto } from "./ampliarInfoProducto.js"
import { agregarCarrito } from "./agregarAlCarrito.js"


//VARIABLES GLOBALES DE LA TIENDA
let producto={}
let carrito=[]


//llamo a la funcion llenartienda
llenarTienda()

//llamo a la funcion ampliarinfoProducto

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProducto'))

let listaProductos = document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    producto=ampliarInfoProducto(event)
    modalInfoProducto.show()

})

//Llamo a la funcion agregarAlCarrito

let botonAgregarCarrito=document.getElementById("botonAgregarCarrito")
botonAgregarCarrito.addEventListener("click",function(){
    
    let cantidadProducto = document.getElementById("cantidadProducto").value 
    producto.cantidad=cantidadProducto

    //agrego el producto al carrito
    carrito.push(producto)
    

    //oculto la modal de info producto
    modalInfoProducto.hide()

    //llamar la funcion agregarCarrito
    agregarCarrito(carrito)
    console.log(carrito)


    
})




























