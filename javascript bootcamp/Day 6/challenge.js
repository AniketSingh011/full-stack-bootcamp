// ================================
// DAY 6 CHALLENGES
// ================================

// Challenge 1
let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2024
};

console.log(car.brand);
console.log(car.model);

// Challenge 2
car.color = "Black";

console.log(car);

// Challenge 3
car.year = 2025;

console.log(car);

// Challenge 4
delete car.model;

console.log(car);

// Challenge 5
let mobile = {
    brand: "Samsung",
    storage: "256GB",
    price: 65000
};

console.log(mobile);

// Challenge 6
let employees = [
    {
        name: "Amit",
        salary: 50000
    },
    {
        name: "Priya",
        salary: 65000
    },
    {
        name: "Karan",
        salary: 72000
    }
];

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}