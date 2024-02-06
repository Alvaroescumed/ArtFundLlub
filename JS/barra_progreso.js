const barraProgreso = document.querySelector(".indicador");
const avance = getComputedStyle(barraProgreso).background;
const objetivoElement = document.querySelector(".conseguido");
const metaElement = document.querySelector(".meta");

const objetivo = parseFloat(objetivoElement.innerText);
const meta = parseFloat(metaElement.innerText);


function updateBarra(){

    const progreso  = (objetivo*100)/meta; //calculamos el porcentaje del progreso
    barraProgreso.style.width = `${progreso}%`;

}