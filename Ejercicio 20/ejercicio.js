// ejercicio 1

function promedio(notas){
  var acum = 0;
  for(var i=0;i<notas.length; i++){
    acum = acum + notas[i];
  }
  return acum/notas.length;
}
