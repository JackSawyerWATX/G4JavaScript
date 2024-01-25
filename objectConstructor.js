
// This is the constructor
function person(rank, firstName, lastName) {
    this.rank = rank
    this.firstName = firstName;
    this.lastName = lastName;
}

// Here I'm creating new instances of the object
let person1 = new person('Capitan', 'Jean Luc', 'Picard')
let person2 = new person('Commander', 'Will', 'Riker')

console.log(person2. rank, person1.firstName, person1.lastName)
console.log(`${person1.rank} ${person2.firstName} ${person2.lastName}`)