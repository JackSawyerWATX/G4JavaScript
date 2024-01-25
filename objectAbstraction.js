
// Abstraction method
function person(fname, lname) {
    let firstName = fname;
    let lastName = lname;

    let getDetails_noAccess = function () {
        return (`First name: ${firstName} Last name: ${lastName}`);
    }
    this.getDetails_access = function () {
        return (`First name: ${firstName} Last name: ${lastName}`);
    }
}

let person1 = new person('Jack', 'Sawyer');
console.log(person1.firstName);
console.log(person1.getDetails_noAccess);
console.log(person1.getDetails_access());

// In this example, we try to access some property(person1.firstname)
// and functions(person1.getDetails_noaccess) but it returns undefined
// while there is a method that we can access from the person object
// (person1.getDetails_access()). By changing the way we define a
// function we can restrict its scope.