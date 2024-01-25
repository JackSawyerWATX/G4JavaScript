
// Encapsulation method
class person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    addCity(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`My name is ${this.name}, and I live in ${this.add}`)
    }
}

let person1 = new person('Jack', 4518);
person1.addCity('Redmond');
person1.getDetails();