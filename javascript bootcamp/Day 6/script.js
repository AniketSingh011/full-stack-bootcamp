// =====================================
// DAY 6 - OBJECTS
// =====================================

console.log("===== OBJECTS =====");

// Creating an Object
let student = {
    name: "Aniket",
    age: 20,
    city: "Pune",
    course: "BCA",
    isStudent: true
};

console.log(student);

// Accessing Properties
console.log(student.name);
console.log(student.age);
console.log(student.city);

// Updating Property
student.city = "Ghaziabad";

console.log(student);

// Adding Property
student.cgpa = 8.9;

console.log(student);

// Deleting Property
delete student.isStudent;

console.log(student);

// Nested Object
let laptop = {
    brand: "HP",
    model: "Omen",
    specs: {
        cpu: "Intel i7",
        ram: "16GB",
        gpu: "RTX 4060"
    }
};

console.log(laptop);
console.log(laptop.specs.cpu);
console.log(laptop.specs.ram);
console.log(laptop.specs.gpu);

// Object Method
let person = {
    firstName: "Aniket",
    lastName: "Singh",

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

// Array of Objects
let students = [
    {
        name: "Aniket",
        marks: 95
    },
    {
        name: "Rahul",
        marks: 87
    },
    {
        name: "Riya",
        marks: 92
    }
];

console.log(students);

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " : " + students[i].marks);
}

console.log("Day 6 Completed!");