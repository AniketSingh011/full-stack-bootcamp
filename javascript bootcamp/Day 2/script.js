// =========================
// Day 2 - Operators & If Else
// =========================

// Arithmetic Operators

let price = 500;
let quantity = 2;
let total = price * quantity;

console.log(total);

// Assignment Operators

let score = 50;

score += 10;
console.log(score);

score -= 20;
console.log(score);

// Comparison Operators

let age = 20;

console.log(age == 20);
console.log(age === 20);
console.log(age > 18);
console.log(age < 18);
console.log(age >= 20);
console.log(age <= 25);
console.log(age != 18);

// If Else

let marks = 75;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Else If

let studentMarks = 95;

if (studentMarks > 100) {
    console.log("Invalid Marks");
} else if (studentMarks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}