const o = new Object();
o.foo = 42;

console.log(o);

let school = {
    name: 'WTSU',
    location: 'Canyon, TX',
    established: '1908',
    displayInfo: function(){
        console.log(`${school.name} was established in ${school.established} in ${school.location}`);

    } 
}
school.displayInfo();

// In line 18, what is passed in the console.log statement is surrounded in ticks or `, in the upper left corner of the keyboard below the ~. These are not apostrophies (') beside the enter key under the quatation marks (")

let object = {
    name: "Thing",
    pronoun: "it",
    place: "anywhere",
    stuff: function(){
        console.log(`The ${object.name} is sometimes known as ${object.pronoun}, and is located ${object.place}. Just so you know.`)
    }
}
object.stuff();