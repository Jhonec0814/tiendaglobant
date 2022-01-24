
export function agregarProducto(carrito) {


    let pildora = document.getElementById("pildora")
    let cantidad = 0


    carrito.forEach(function (producto) {

        cantidad = cantidad + producto.cantidad

    })

    pildora.textContent = cantidad
    pildora.classList.remove("invisible")


}