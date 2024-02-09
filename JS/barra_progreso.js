//Creamos la funcion para actualizar la barra con cada micromecenazgo

function updateProgreso(){
    const barraProgreso = document.getElementById("indicador");
    const objetivoElement = document.querySelector(".conseguido");
    const metaElement = document.getElementById("meta");
    const objetivo = parseFloat(objetivoElement.innerText); //convertimos a float los elementos que hemos cogido del htlm
    const meta = parseFloat(metaElement.innerText);
    const progreso  = (objetivo*100)/meta; //calculamos el porcentaje del progreso


    barraProgreso.style.width = `${progreso}%`; //convertimos el porcetaje de progreso en las dimensiones de ancho de la barra
}

function updateColaboracion(){ //Creamos ahora otra funcion para que al interactuar con el botón aumente en 100 la contribución al proyecto

    const objetivoElement = document.querySelector(".conseguido");
    const boton = document.querySelector(".boton");


    boton.addEventListener("click", function(){
        const objetivo = parseFloat(objetivoElement.innerText);
        objetivoElement.innerText = objetivo + 100;
        updateProgreso();
    });
}

updateColaboracion(); //llamamos a las funciones
updateProgreso();