// Ejercicio 2
function Student(first, last, dni, email){
  this.firstName = first;
  this.lastName = last;
  this.dni = dni;
  this.email = email;
  var id = Math.random();

  this.getId = function(){
    return id;
  }

  this.getFullName = function(){
    return this.firstName && this.lastName ? this.firstName + ' ' + this.lastName : 'No está definido'
  }
}

var student1 = new Student('Juan', 'Pérez', 45678987, 'juan@gmail.com');
var student2 = new Student('Ana', 'Fernandez', 45678989, 'ana@gmail.com');
var student3 = new Student('Pedro', 'Mármol', 45678956, 'pedro@gmail.com');

console.log(student1.getFullName());
console.log(student2.getFullName());
console.log(student3.getFullName());

console.log(student1.getId());
console.log(student2.getId());
console.log(student3.getId());
