// Hoisting

function codeHoist() {
a = 10;
let b = 50;
}
codeHoist();

console.log(a);  // 10
// console.log(b);  
// ReferenceError: b is not defined

// A function called codeHoist was created and a variable that wasn't 
// declaired using let, var, or const. although 'let' was used to 
// create variable b. The undeclaired variable was assigned to the 
// global scope by JavaScript and that is how it was able to to print 
// outside the function. Vairable b is outside the scope of the 
// function and that is why a Refrence Error is returned.

// console.log(name);
// let name = 'Jack Sawyer'; 
// ReferenceError: Cannot access 'name' before initialization

// Here I tried to code console.log before declairing the variable 
// name. The console returned a Refrence Error because it was trying to 
// use the name varuiable before it was declaired.

// let name;
// console.log(name);
// name = 'Jack Sawyer';  // undefined

// function fun() {
//     console.log(name);
//     let name = 'Jack Sawyer';
// }
// fun();

// ReferenceError: Cannot access 'name' before initialization

function fun() {
    let name;
    console.log(name);
    name = 'Jack Sawyer';
}
fun(); // undefined

function func() {
    let name = 'Jack Sawyer';
    console.log(name);
}
func();

funct();

function funct() {
    console.log('Function is hoisted!');
}