// ==========================
// DAY 7 - FUNCTIONS
// ==========================

console.log("===== FUNCTIONS =====");

// Simple Function
function greet() {
    console.log("Hello, Aniket!");
}

greet();

// Function with Parameters
function greetUser(name) {
    console.log("Hello, " + name);
}

greetUser("Aniket");
greetUser("Rahul");

// Function with Return Value
function add(a, b) {
    return a + b;
}

let sum = add(10, 20);
console.log("Sum:", sum);

// Function to Multiply
function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 6));

// Even or Odd
function checkEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEven(10));
console.log(checkEven(9));

// Square Function
function square(number) {
    return number * number;


    
}

console.log(square(7));

// Function with No Return
function welcome() {
    console.log("Welcome to JavaScript Bootcamp!");
}

welcome();

console.log("Day 7 Completed!");