// Spread Operator = ... allows an iterable such as an Array or a String to be expanded into separate elements.
//          Unpacking the elements of an array or object into individual elements.

let elements = [1, 2, 3, 4, 5, 6];

// print largest number in the array

let max = Math.max(elements); // this will not work because Math.max() expects individual numbers, not an array.

let max2 = Math.max(...elements); // this will work because the spread operator expands the array into individual element.

let min = Math.min(...elements);

console.log(max); // NaN
console.log(max2); // 6
console.log(min); // 1

console.log("-------------------");

let username = "Harshal";
let letters = console.log(...username); // this will print each character of the string as a separate element.    H a r s h a l

let lettersArray = [...username]; // this will create an array of characters from the string.    ["H", "a", "r", "s", "h", "a", "l"]

console.log(lettersArray); // ["H", "a", "r", "s", "h", "a", "l"]

console.log("-------------------");

let foods = ["pizza", "burger", "pasta"];
let moreFoods = [...foods, "sushi", "tacos"]; // this will create a new array that combines the elements of the foods array with the new elements.

console.log(moreFoods); // ["pizza", "burger", "pasta", "sushi", "tacos"]

console.log(foods); // ["pizza", "burger", "pasta"]