// Intercambiar el jugador?

var jugador = true;

// Intercambiamos cruz o circulo según jugador

function clickCuadro (event) {

  var cuadroActual = $(this);

  if(!(cuadroActual.hasClass('circle') || cuadroActual.hasClass('cross'))){
    if(jugador){
      cuadroActual.addClass('circle');
    }else{
      cuadroActual.addClass('cross');
    }

    jugador = !jugador;
  }
}

// Asignamos Eventos

var cuadros = $('.square');

cuadros.click(clickCuadro);
