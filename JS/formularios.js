
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('publicar-proyecto');
    const nombreProyecto = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    const categoria = document.getElementById('categoria');
    const autor = document.getElementById('autor');
    const fecha = document.getElementById('fecha');
    const meta = document.getElementById('meta');
    const validators = document.querySelectorAll('.validator');
    const modal = document.querySelector('.modal');


    function validateField(input, condicion, errorMessage){
            if(condicion){
                setSuccess(input);
            }else{
                setError(input, errorMessage);
            }
    }
    function setError(input, mensage){
        const control = input.parentElement;
        control.classList.remove('success');
        control.classList.add('error');
        input.placeholder = mensage;
    }

    function setSuccess(input){
        const control = input.parentElement;
        control.classList.remove('error');
        control.classList.add('success');
    }


    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if(checkInputs()){
            showModal();
        }
    });

    nombreProyecto.addEventListener('input', () => {
        validateField(nombreProyecto, nombreProyecto.value.trim() !== '', 'No puede estar en blanco');
    })

    descripcion.addEventListener('input', () => {
        validateField(descripcion, descripcion.value.trim() !== '', 'No puede estar en blanco');
    })

    categoria.addEventListener('input', () =>{
        validateField(categoria, categoria.value.trim() !== 'Seleccionar', 'Introduzcca una categoria valida');
    })

    autor.addEventListener('input', () =>{
        validateField(autor, autor.value.trim() !== '', 'No puede estar en blanco');
    })
    fecha.addEventListener('input', () => {
        validateField(fecha, Date(fecha.value.trim()) >= new Date(), 'Introduzca una fecha correcta');
    })

    meta.addEventListener('input', () => {
        validateField(meta, meta.value.trim() >= '0' || meta.value.trim() !== '', 'Introduzca una meta economica correcta');
    })

    function checkInputs(){
        let isValid = true;

        validators.forEach(item => {
            if(item.classList.contains('error')){
                isValid = false;
            }
        });

        return isValid;
    }



    function showModal(){

         const closeModalBtn = modal.querySelector('span');
         modal.style.display = 'block';

         closeModalBtn.addEventListener('click', function() {
             modal.style.display = 'none';
         });

         window.onclick = function(event){
            if(event.target === modal){
                modal.style.display = 'none';
            }
         }
    }

});