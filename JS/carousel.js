const contenedorImagenes = document.querySelector('.container');
const contenedorControles = document.querySelector('.controles');
const imagenes  = document.querySelectorAll('.imagen')

class Carousel { //creamos una clase carousel que contiene el constructor y las funciones que necesita para funcionar

  constructor (container, imagenes){
    this.carouselContainer = container;
    this.carouselImagenes = [...imagenes];
    this.useControles();
  }

  //Creamos la funcion para crear el movimiento de las imagenes

  updateImagenes(){
    this.carouselImagenes.forEach(el =>{
      el.classList.remove('imagen-1');
      el.classList.remove('imagen-2');
      el.classList.remove('imagen-3');
    });

    this.carouselImagenes.slice(0, 3).forEach((el, i) => {
      el.classList.add(`imagen-${i + 1}`);
    });
  }

  //Creamos la funcion para la direccion
  setPosicion(direccion){
    if(direccion.className == 'btn-prev'){
      this.carouselImagenes.unshift(this.carouselImagenes.pop());
    } else{
      this.carouselImagenes.push(this.carouselImagenes.shift());
    }
    this.updateImagenes();
  }

  useControles(){ //interacciones con los botones para mover el carousel

  const botonNext= document.querySelector('.btn-next');
  const botonPrev= document.querySelector('.btn-prev');

  if (botonPrev && botonNext) {
    botonPrev.addEventListener('click', e => {
      e.preventDefault();
      this.setPosicion(botonPrev);
    });

    botonNext.addEventListener('click', e => {
      e.preventDefault();
      this.setPosicion(botonNext);
    });
  } else {
    console.error("Error");
  }
}

}

const carouselIndex = new Carousel(contenedorImagenes, imagenes); //creamos un carousel con los elemento del idex.html
carouselIndex.useControles(); //llamamos a la funcion de los controles para que funcione en la web