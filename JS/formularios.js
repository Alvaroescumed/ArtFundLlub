
document.addEventListener('DOMContentLoaded', function() {

    //cogemos los elementos del form a comprobar
    const form = document.getElementById('publicar-proyecto');
    const nombreProyecto = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    const categoria = document.getElementById('categoria');
    const autor = document.getElementById('autor');
    const fecha = document.getElementById('fecha');
    const meta = document.getElementById('meta');
    const validators = document.querySelectorAll('.validator');
    const modal = document.querySelector('.modal');
    const today = new Date(); //establecemos la fecha actual para evitar más tarde que se cree un proyecto con una fecha anterior


    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if(checkInputs() === true ){
            showModal();
        }
    })


    // Creamos los eventos para cada input del form
    nombreProyecto.addEventListener('input', () => {
        validateField(nombreProyecto, nombreProyecto.value.trim() !== '', 'No puede estar en blanco');
    })

    descripcion.addEventListener('input', () => {
        validateField(descripcion, descripcion.value.trim() !== '', 'No puede estar en blanco');
    })

    categoria.addEventListener('input', () =>{
        validateField(categoria, categoria.value !== 'Seleccionar', 'Introduzcca una categoria valida');
    })

    autor.addEventListener('input', () =>{
        validateField(autor, autor.value.trim() !== '', 'No puede estar en blanco');
    })
    fecha.addEventListener('input', () => {
        validateField(fecha, new Date(fecha.value.trim()) >= today, 'Introduzca una fecha correcta');
    })

    meta.addEventListener('input', () => {
        validateField(meta, parseInt(meta.value.trim()) >= 0 , 'Introduzca una meta economica correcta');
    })

    function validateField(input, condicion, errorMessage){ //creamos la funcion en la que validara si se cumple la condicion creada en los eventos anteriores

        if(condicion){
            setSuccess(input);
        }else{
            setError(input, errorMessage);
        }

        console.log('validate Ok')
    }
    function setError(input, mensage){ //establecemos el input como erroneo
        const control = input.parentElement;
        control.classList.remove('success');
        control.classList.add('error');
        input.placeholder = mensage;

        console.log('error Ok')
    }

    function setSuccess(input){ //establecemos el input como correcto
        const control = input.parentElement;
        control.classList.remove('error');
        control.classList.add('success');

        console.log('succes Ok')
    }
    function checkInputs(){ //comprobamos que todos los inputs sean correctos para poder crear el proyecto

        let isValid;

        validators.forEach(item => {
            if(item.classList.contains('success')){
                isValid = true;
            }else{
                isValid = false;
            }
        });

        return isValid;
    }



    function showModal(){ //funcion para mostrar en pantalla el modal avisando al usuario de que su proyecto se ha creado con exito

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