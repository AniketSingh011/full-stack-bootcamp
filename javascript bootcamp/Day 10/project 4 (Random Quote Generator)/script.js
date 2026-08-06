let quotes = [
    "Never give up.",
    "Stay consistent.",
    "Dream big.",
    "Keep learning.",
    "Success comes from hard work."
];

let quote = document.getElementById("quote");
let button = document.getElementById("quoteBtn");

button.addEventListener("click", function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random];

});