class person {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return (`Person's Name: ${this.name}`);
    }
}
class student extends person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()}, Student ID: ${this.id}`);
    }
}
let student1 = new student('John Henry', 9876543);
console.log(student1.toString());

// The Person and Student objects both have the same method (i.e 
// toString()), this is called Method Overriding. Method 
// Overriding allows a method in a child class to have the 
// same name(polymorphism) and method signature as that of a 
// parent class. 