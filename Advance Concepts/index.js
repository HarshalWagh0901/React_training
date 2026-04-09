// .forEach() method is used to execute a provided function once for each array element.
// .forEach() does not return new array, it simply executes the provided function for each element in the array, If you want to create a new array based on the results of calling a function for every array element, you should use .map() instead.

// .map() method is used to create a new array by calling a provided function on every element in the calling array. It returns a new array with the results of calling a provided function on every element in the calling array, without modifying the original array.



const dates = ["2024-1-25", "2026-2-14", "2025-3-17"];

const formattedDates = dates.map(formatDate);
console.log(formattedDates);

function formatDate(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// ------------------------------------------------------------------------------------------------------

// .filter() = creates a new array by filtering out elements

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

// ------------------------------------------------------------------------------------------------------

//  reduce() = reduce the elements of an array to a single value

const prices = [5, 30, 10, 15, 20];

const totalPrice = prices.reduce(sum);
console.log(totalPrice);


function sum(previousValue, nextValue) {
    return previousValue + nextValue;
}

const grades = [85, 90, 78, 92, 88];

const maximum = grades.reduce(getMax);
console.log(maximum);

function getMax(previousValue, nextValue) {
    return Math.max(previousValue, nextValue);
}

// ------------------------------------------------------------------------------------------------------


//  function expression = a function that is assigned to a variable, it can be anonymous or named, it can be used as a callback function.

//      - a way to define a function as values ot variables.

const numbers1 = [1, 2, 3, 4, 5];

const cubes = numbers1.map(function (element) {
    return Math.pow(element, 3);
});

const squares = numbers1.map(function (element) {
    return Math.pow(element, 2);
});

console.log(squares);

console.log(cubes);

// ------------------------------------------------------------------------------------------------------

/*
    arrow function = a concise way to write function expressions,
                     - good for simple functions that you use only once or as callback functions.
                     - {parameters} => some code
*/

// const hello = () => console.log("Hello");

// hello();

// const helloBro = (name) => console.log(`Hello ${name}`);

// helloBro("Bro");


// setTimeout(hello, 3000);

// function hello() {
//     console.log("Hello");
// }

setTimeout(function hello(){
    console.log("Hello");
}, 3000);

setTimeout( () => console.log("Hello"), 3000);

const numbers2 = [1, 2, 3, 4, 5];

const sumOfNums = numbers2.reduce((previousValue, nextValue) => previousValue + nextValue);

console.log(sumOfNums);

// ------------------------------------------------------------------------------------------------------

//  Constructor = a special method for defining the properties and methods of objects.

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() { console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Toyota", "Camry", 2020, "White");
console.log(car1);
console.log(car1.make);

const car2 = new Car("Honda", "Civic", 2021, "Black");
console.log(car2);

car1.drive();
car2.drive();