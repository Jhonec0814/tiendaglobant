
export function llenarTienda() {


    let productos = [

        { foto: 'img/producto1.png', nombre: "Headphones Logitech", precio: 150000, cantidad: 0 },
        { foto: 'img/producto2.png', nombre: "keyboard Logitech", precio: 90000, cantidad: 0 },
        { foto: 'img/producto3.jpg', nombre: "Mouse pad", precio: 35000, cantidad: 0 },
        { foto: 'img/producto4.png', nombre: "Funko Miss Fortune", precio: 35500, cantidad: 0 },
        { foto: 'img/producto5.jpg', nombre: "History book Runa Terra", precio: 55000, cantidad: 0 },
        { foto: 'img/producto6.jpg', nombre: "Case League of legends", precio: 25000, cantidad: 0 },
        { foto: 'img/producto7.png', nombre: "Earphones KDA", precio: 80000, cantidad: 0 },
        { foto: 'img/producto8.jpg', nombre: "Mouse pad KDA", precio: 35000, cantidad: 0 },
        { foto: 'img/producto9.png', nombre: "Headphones KDA", precio: 160000, cantidad: 0 },
        { foto: 'img/producto10.jpg', nombre: "Figure Tristana", precio: 70000, cantidad: 0 }


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

