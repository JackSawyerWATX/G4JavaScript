
// Defining the class using ES6
class Vehicle {
    constructor(year, make, model, trim) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.trim = trim;
    }
    getDetails() {
        return(`This is a ${this.year} ${this.make} ${this.model} ${this.trim}`)
    }
}

// Making an object with the help of the constructor
let car1 = new Vehicle('1968','Ford', 'Mustang', 'GT')
let car2 = new Vehicle('1969', 'Chevrolet', 'Impala', 'SS')

console.log(car1.make);
console.log(car2.model);
console.log(car1.getDetails());
console.log(car2.getDetails());