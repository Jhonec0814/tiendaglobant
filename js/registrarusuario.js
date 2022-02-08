// 0. Importo librería de autenticación
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

// 1. Para registrar a una persona en su app
let botonRegistro =document.getElementById("botonregistro")
botonRegistro.addEventListener("click",function(event){
    // esto es para preevenir la accion de defecto de reiniciar la pagina
    event.preventDefault()
    
    // obtenemos el valor de cada input del formulario
    let email = document.getElementById("emailbox").value
    let password = document.getElementById("passwordbox").value


    //console.log(email,password)
    // Validar el formulario

    
    // Agregar la rutina para llevar los datos firebase
    //(HABLAR CON EL BACK)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log("todo bien mi pae")
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("error motherfucker :V")
    });



})











