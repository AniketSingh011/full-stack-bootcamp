// ================================
// DAY 9 - DOM MANIPULATION
// ================================

console.log("===== DOM Manipulation =====");

// Select Element by ID
let title = document.getElementById("title");

console.log(title);

// Change Text
title.textContent = "Welcome to JavaScript DOM";

// Select by Class
let paragraph = document.querySelector(".text");

paragraph.textContent = "DOM allows JavaScript to change HTML.";

// Change Style
title.style.color = "red";
title.style.fontSize = "40px";

// Button
let button = document.getElementById("changeBtn");

button.textContent = "Click Me";

console.log("Day 9 Completed!");