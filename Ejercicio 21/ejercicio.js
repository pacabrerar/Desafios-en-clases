// Ejercicio 1

function Car(model, brand, year){
  this.model = model;
  this.brand = brand;
  this.year = year;
  var id = Math.random();

  this.getCarName = function(){
    return this.brand + ' ' + this.model + ' Año: ' + this.year;
  };
}

var car1 = new Car('Suran', 'Volkswagen', 2015);
var car2 = new Car('Audi TT', 'Audi', 2017);
var car3 = new Car('Gran Turismo', 'Maserati', 2018);

console.log(car1.getCarName());
console.log(car2.getCarName());
console.log(car3.getCarName());
