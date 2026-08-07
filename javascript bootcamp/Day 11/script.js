// =====================================
// DAY 11 - ES6 FEATURES
// =====================================

console.log("===== LET & CONST =====");

let score = 80;
score = 95;
console.log(score);

const country = "India";
console.log(country);

// =====================================

console.log("===== TEMPLATE LITERALS =====");

let name = "Aniket";
let city = "Pune";

console.log(`Hello ${name}`);
console.log(`${name} lives in ${city}`);

// =====================================

console.log("===== DESTRUCTURING =====");

const student = {
    name: "Aniket",
    age: 20,
    course: "BCA"
};

const { name: studentName, age, course } = student;

console.log(studentName);
console.log(age);
console.log(course);

// =====================================

console.log("===== SPREAD OPERATOR =====");

const games = ["FC26", "Valorant"];

const allGames = [...games, "GTA 6"];

console.log(allGames);

const user = {
    name: "Aniket",
    age: 20
};

const updatedUser = {
    ...user,
    city: "Pune"
};

console.log(updatedUser);

// =====================================

console.log("===== DEFAULT PARAMETERS =====");

function greet(user = "Guest") {
    console.log(`Welcome ${user}`);
}

greet();
greet("Aniket");

console.log("Day 11 Completed!");