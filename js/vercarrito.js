


export function verCarrito(carrito) {

    let contenedor = document.getElementById("resumen")
    let etiquetaTotal = document.getElementById("total")
    let total = 0

    contenedor.innerHTML = ""



    carrito.forEach(function (producto) {

        console.log(producto)

        let fila = document.createElement("div")
        fila.classList.add("row")
        fila.classList.add("mb-5")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-4")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-8")
        columna2.classList.add("align-self-center")

        let imagen = document.createElement("img")
        imagen.src = producto.imagen
        imagen.classList.add("img-fluid")
        imagen.classList.add("w-100")

        let nombre = document.createElement("h5")
        nombre.textContent = producto.nombre

        let cantidad = document.createElement("h6")
        cantidad.textContent = producto.cantidad + " und"

        let precio = document.createElement("h6")
        precio.textContent = "Precio unidad: " + producto.precio

        let subtotal = document.createElement("h6")
        subtotal.textContent = "Subtotal: " + "$" + Number(producto.precio.split("$")[1]) * producto.cantidad

        total = total + (Number(producto.precio.split("$")[1]) * producto.cantidad)


        columna1.appendChild(imagen)

        columna2.appendChild(nombre)
        columna2.appendChild(cantidad)
        columna2.appendChild(precio)

        fila.appendChild(columna1)
        fila.appendChild(columna2)

        contenedor.appendChild(fila)



    })

    etiquetaTotal.textContent = "Total: $" + total




}