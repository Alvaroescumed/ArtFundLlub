const fechaLimite = new Date('12/31/2024 23:59');
const diasRestantes = document.querySelector('.dias-restantes')

function updateDias(){
    const now = Date.now(); // cogemos la fecha actual

    const duracion = fechaLimite - now;

    const dias_restantes = Math.floor(duracion / 86400000); //dividimos para calcular los dias, ya que JS toma el tiempo en ms

    diasRestantes.textContent = dias_restantes;
}

updateDias();
setInterval(updateDias, 1000);