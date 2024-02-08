function updateProgreso(){
    const barraProgreso = document.getElementById("indicador");
    const objetivoElement = document.querySelector(".conseguido");
    const metaElement = document.querySelector(".meta");
    const objetivo = parseFloat(objetivoElement.innerText);
    const meta = parseFloat(metaElement.innerText);
    const progreso  = (objetivo*100)/meta; //calculamos el porcentaje del progreso


    barraProgreso.style.width = `${progreso}%`;
}

updateProgreso();