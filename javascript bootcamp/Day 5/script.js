// ================================
// DAY 5 - ARRAYS
// ================================

// Creating Arrays
let fruits = ["Apple", "Banana", "Mango"];

console.log("=== Original Array ===");
console.log(fruits);

// Accessing Elements
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Third Fruit:", fruits[2]);

// Updating an Element
fruits[1] = "Orange";

console.log("=== Updated Array ===");
console.log(fruits);


// Array Length
console.log("Total Fruits:", fruits.length);

// Adding Elements
fruits.push("Pineapple");
console.log("After Push:", fruits);

// Removing Last Element
fruits.pop();
console.log("After Pop:", fruits);

// Adding at Beginning
fruits.unshift("Grapes");
console.log("After Unshift:", fruits);

// Removing First Element
fruits.shift();
console.log("After Shift:", fruits);

// Loop Through Array
console.log("=== Looping Through Array ===");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Mixed Data Types
let details = [
    "Aniket",
    20,
    true,
    "Pune"
];

console.log(details);

// End
console.log("Day 5 Completed!");