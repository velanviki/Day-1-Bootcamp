// Assignment 1: Array Operations
// Create an array with values called "fruits".
let fruits = ["apple", "banana", "orange"];

// Remove the first fruit from the array.
fruits.splice(0, 1);

// Add "grape" to the end of the array.
fruits.push("grape");

// Update the second fruit in the array to "pear".
fruits.splice(1, 1, "pear");

// Final output
// ["banana", "pear", "grape"]
console.log(fruits);


// Assignment 2: Object Operations
// Create an object with properties called "person".
let person = { name: "John", age: 30, city: "New York" };

// Remove the "age" property from the "person" object.
delete person.age;

// Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer";

// Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco";

// Final output
// {
//     "name": "John",
//     "city": "San Francisco",
//     "job": "Engineer"
// }
console.log(person);



// Assignment 3: Array of Objects Operations
let cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2018,
  },
  {
    make: "Hyundai",
    model: "Aura",
    year: 2023,
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2020,
  },
];

// Remove the first car object from the "cars" array.
cars.splice(0, 1);

// Add a new car object to the "cars" array
cars.push({ make: "Honda", model: "Civic", year: 2020 });

//Update the "model" property of the second car object in the array to "Accord".
cars[1].model = "Accord"

//Final output
/*[
    {
        "make": "Hyundai",
        "model": "Aura",
        "year": 2023
    },
    {
        "make": "Tesla",
        "model": "Accord",
        "year": 2020
    },
    {
        "make": "Honda",
        "model": "Civic",
        "year": 2020
    }
]*/
console.log(cars);
