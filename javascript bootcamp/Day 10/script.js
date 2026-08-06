// ======================================
// DAY 10 - DOM EVENTS & MINI PROJECTS
// ======================================

// =======================
// Counter App
// =======================

let count = 0;

let counter = document.getElementById("count");

document.getElementById("increase").addEventListener("click", function () {
    count++;
    counter.textContent = count;
});

document.getElementById("decrease").addEventListener("click", function () {
    count--;
    counter.textContent = count;
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
});

// =======================
// Dark Mode
// =======================

document.getElementById("toggleBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// =======================
// Random Background Color
// =======================

let colors = [
    "red",
    "blue",
    "green",
    "purple",
    "yellow",
    "orange",
    "pink",
    "cyan"
];

document.getElementById("colorBtn").addEventListener("click", function () {

    let random = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[random];

});

// =======================
// Character Counter
// =======================

let text = document.getElementById("text");
let charCount = document.getElementById("charCount");

text.addEventListener("input", function () {

    charCount.textContent = text.value.length;

});

// =======================
// Random Quote Generator
// =======================

let quotes = [
    "Never give up.",
    "Dream big.",
    "Success comes from consistency.",
    "Believe in yourself.",
    "Stay focused.",
    "Keep learning every day."
];

let quote = document.getElementById("quote");

document.getElementById("quoteBtn").addEventListener("click", function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random];

});

console.log("Day 10 Completed!");