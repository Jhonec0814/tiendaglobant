
export function llenarTienda() {


    let productos = [

        { foto: 'img/tienda1.jpg', nombre: "Batimovil Escala", precio: 150000, cantidad: 0 },
        { foto: 'img/tienda2.jpg', nombre: "Camiseta Batman", precio: 50000, cantidad: 0 },
        { foto: 'img/tienda3.jpg', nombre: "Gorra Batman DC", precio: 25000, cantidad: 0 },
        { foto: 'img/tienda4.jpg', nombre: "Termo Batman DC", precio: 35500, cantidad: 0 },
        { foto: 'img/tienda5.jpg', nombre: "Batman v Superman", precio: 95000, cantidad: 0 },
        { foto: 'img/tienda6.jpg', nombre: "Maleta Batman", precio: 250000, cantidad: 0 },
        { foto: 'img/tienda7.jpg', nombre: "Silla Batman PRO", precio: 1500000, cantidad: 0 },
        { foto: 'img/tienda8.jpg', nombre: "Comics Batman", precio: 350000, cantidad: 0 },
        { foto: 'img/tienda9.jpg', nombre: "Caja sorpresa", precio: 187000, cantidad: 0 },
        { foto: 'img/tienda10.jpg', nombre: "Lonchera Batman", precio: 70000, cantidad: 0 }


    ]

    productos.forEach(function (producto) {

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("p-4")
        imagen.src = producto.foto

        let separador = document.createElement("hr")
        separador.classList.add("w-75")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let nombre = document.createElement("h5")
        nombre.classList.add("fw-bold")
        nombre.classList.add("text-center")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center")
        precio.textContent = "$" + producto.precio

        let botonVerProducto = document.createElement("button")
        botonVerProducto.classList.add("m-2")
        botonVerProducto.classList.add("btn")
        botonVerProducto.classList.add("btn-outline-dark")
        botonVerProducto.textContent = "ver producto"
        botonVerProducto.setAttribute("type", "button")


        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonVerProducto)


        columna.appendChild(tarjeta)
        fila.appendChild(columna)



    })





}

