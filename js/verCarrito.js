export function verCarrito(carrito){


    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML=""
    let total=0 , totalfinal=0, totalUS=0, totalUSfinal=0;
    
    carrito.forEach(function(producto){

        let fila = document.createElement("div")
        fila.classList.add("row")    

        let columna1= document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")

        let columna2= document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-8")

        let fotoProducto= document.createElement("img")
        fotoProducto.classList.add("img-fluid")
        fotoProducto.classList.add("w-100")
        fotoProducto.src=producto.imagen

        let nombreProducto = document.createElement("h4")
        nombreProducto.textContent = producto.nombre

        let precioProducto = document.createElement("h5")
        precioProducto.textContent = producto.precio

        let cantidadProducto = document.createElement("h6")
        cantidadProducto.textContent = producto.cantidad
        cantidadProducto.textContent =  producto.cantidad + " Und" 

        let separador = document.createElement("hr")

        total = total+(Number(producto.precio)*Number(producto.cantidad))
        console.log((producto.precio))
        console.log(Number(producto.cantidad))

        totalUS = totalUS+(Number(producto.precio)*Number(producto.cantidad))
        console.log((producto.precio))
        console.log(Number(producto.cantidad))
        // Padres e hijos

        columna1.appendChild(fotoProducto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        columna2.appendChild(nombreProducto)
        columna2.appendChild(precioProducto)
        columna2.appendChild(cantidadProducto)
        columna2.appendChild(separador)
        contenedor.appendChild(fila)

    })


    totalfinal= document.createElement("h5")
    totalfinal.textContent=total

    contenedor.appendChild(totalfinal)

    totalUSfinal = document.createElement("h5")
    totalUSfinal.textContent=totalUS


   

}