const fechaLimite = document.getElementById('fecha');
const diasRestantes = document.querySelector('.dias-restantes');


function updateDias(){
    const now = Date.now(); // cogemos la fecha actual

    const fechaValue = fechaLimite.textContent;

    const [dia, mes, anio] = fechaValue.split('/'); // separamos la fecha para que encage co nel formato de JS

    const fecha = new Date(`${mes}/${dia}/${anio}`)

    const duracion = fecha - now;

    const dias_restantes = Math.floor(duracion / 86400000); //dividimos para calcular los dias, ya que JS toma el tiempo en ms

    diasRestantes.textContent = dias_restantes;
}

updateDias();
setInterval(updateDias, 1000);