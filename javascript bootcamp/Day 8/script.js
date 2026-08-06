// ======================================
// DAY 8 - SCOPE & HOISTING
// ======================================

console.log("===== SCOPE =====");

// Global Scope
let name = "Aniket";

function greet() {
    console.log(name);
}

greet();

// Local Scope
function displayAge() {
    let age = 20;
    console.log(age);
}

displayAge();

// Block Scope
if (true) {
    let city = "Pune";
    console.log(city);
}

// Function Scope
function demo() {
    var course = "JavaScript";
    console.log(course);
}

demo();

// Shadowing
let language = "Python";

function learn() {
    let language = "JavaScript";
    console.log(language);
}

learn();

console.log(language);

// ======================================
// HOISTING
// ======================================

sayHello();

function sayHello() {
    console.log("Hello!");
}

// var Hoisting
console.log(a);
var a = 10;

// let & const Hoisting
// Uncomment to see the error
// console.log(b);
// let b = 20;

console.log("Day 8 Completed!");