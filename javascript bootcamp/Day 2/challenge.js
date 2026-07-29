// =========================
// Day 2 Challenges
// =========================

// Challenge 1

let wallet = 1000;
let gift = 500;
let spent = 300;

let finalAmount = wallet + gift - spent;

console.log(finalAmount);

// Challenge 2

let balance = 5000;
let withdraw = 1200;

let remainingBalance = balance - withdraw;

console.log(remainingBalance);

// Challenge 3

let coins = 100;

coins += 50;
coins += 25;

console.log(coins);

// Challenge 4

let lives = 5;

lives -= 2;
lives += 4;
lives -= 1;

console.log(lives);

// Challenge 5

let votingAge = 16;

if (votingAge >= 18) {
    console.log("Can Vote");
} else {
    console.log("Cannot Vote");
}

// Challenge 6

let grade = 95;

if (grade >= 90) {
    console.log("Grade A");
} else {
    console.log("Not Grade A");
}

// Challenge 7

let marks = 110;

if (marks > 100) {
    console.log("Invalid Marks");
} else if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}