// Define the object
let person = {
    first_name: 'Jack',
    last_name: 'Sawyer',

    // Method
    getFunction: function () {
        return (`Hello. My name is ${person.first_name} ${person.last_name}`)
    },
    // Object within an object
    phone_number: {
        mobile: '2064587888',
        office: '4252067945'
    } 
}

console.log(person.getFunction());
console.log(person.phone_number.mobile);
console.log(person.phone_number.office);