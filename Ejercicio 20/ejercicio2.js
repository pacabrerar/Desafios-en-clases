// Ejercicio 2

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
];

function search(nombreApellido){
  for (var i = 0; i < studentsList.length; i++){
    if(studentsList[i].firstName === nombreApellido || studentsList[i].lastName === nombreApellido){
      return i;
    }
  }
  return -1;
}
