function car(name, year) {
  this.name = name;
  this.year = year;
  return this;
}
let car = car("Ford", 2014);
console.log(car);
console.log(car.name);
console.log(car.year);
