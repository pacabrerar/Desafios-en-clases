// Primer ejercicio

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
];

for(var i = 0; i < daysOfTheWeek.length; i++){
  var day = daysOfTheWeek[i];
  if(day ==='Lunes' || day === 'Martes' || day === 'Miércoles' || day === 'Miercoles' ||
    day === 'Jueves' || day === 'Viernes'){
      console.log(day + ' es un día de semana!');
    }else if (day === 'Sábado' || day === 'Sabado' || day === 'Domingo') {
      console.log(day + ' es un día de fin de semana!');
    }else{
      console.log(day + ' no es un día');
    }
}


// Segundo Ejercicio


do{
  var operacion = prompt("Ingrese la operación a realizar (sum, res, mul o div)");

}while(operacion !== 'sum' && operacion !== 'res' && operacion !== 'mul' && operacion !== 'div')

do{
  var numero1 = prompt('Ingrese el primer número:');
}while(!parseInt(numero1) && parseInt(numero1) !== 0)

do{
  var numero2 = prompt('Ingrese el segundo número:');
}while((!parseInt(numero2) && parseInt(numero2) !== 0) || (operacion === 'div' && numero2 == 0))

switch (operacion) {
  case 'sum':
      console.log(parseInt(numero1)+parseInt(numero2));
    break;
  case 'res':
      console.log(parseInt(numero1)-parseInt(numero2));
    break;
  case 'mul':
      console.log(parseInt(numero1)*parseInt(numero2));
    break;
  case 'div':
      console.log(parseInt(numero1)/parseInt(numero2));
    break;
  default:

}
