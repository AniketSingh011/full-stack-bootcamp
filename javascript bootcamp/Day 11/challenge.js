// =====================================
// DAY 11 CHALLENGES
// =====================================

// Challenge 1
let marks = 80;
marks = 95;
console.log(marks);

// Challenge 2
const language = "JavaScript";
console.log(language);

// Challenge 3
let game = "Valorant";
console.log(`I play ${game}.`);

// Challenge 4
const person = {
    name: "Rahul",
    age: 22
};

const { name, age } = person;

console.log(name);
console.log(age);

// Challenge 5
const colors = ["Red", "Blue"];

const newColors = [...colors, "Green"];

console.log(newColors);

// Challenge 6
function welcome(user = "Guest") {
    console.log(`Welcome ${user}`);
}

welcome();
welcome("Aniket");
