//funcion
function cerrarCaja(caja){
    var cajaAEliminar = document.querySelector("#" + caja);

    cajaAEliminar.remove();

    //alert("Se elimino correctamente"); // Opcion 1

    //Opcion 2: Agregar un elemento HTML que diga que se elimino

    var mensaje = document.createElement("p");
    mensaje.innerHTML = "La notificacion se elimino correctamente :-)";

    console.log(mensaje); // Imprime en consola el elemento creado


    //Agrega el elemento
    var contenidoDiv = document.getElementById("contenido");
    contenidoDiv.appendChild(mensaje);

}

//Funcion que elimina el HTML de el elemento del parametro
function limpiarCaja(caja){
    var cajaABorrar = document.querySelector("#" + caja);
    cajaABorrar.innerHTML = "";
}


//Temas de JS que vimos en clase:
// variables en JS
// Elementos de la pagina como objetos: DOM
//Propiedad de los objetos de la pagina: remove(), appendChild(), innerHTML