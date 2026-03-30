// Array = is like a structure that can hold multiple values in a single variable.

let fruits = ["apple", "banana", "orange"];

fruits[0] = "grape"; // we can change the value of an array element by using its index.

fruits.push("kivi");    // add element to the end of the array.
fruits.pop();              // remove the last element of the array.
fruits.unshift("strawberry"); // add element to the beginning of the array.
fruits.shift();             // remove the first element of the array.

let count = fruits.length; // get the number of elements in the array.

console.log(count); // 3

let index = fruits.indexOf("banana"); // get the index of an element in the array.
let index2 = fruits.indexOf("kivi"); // if the element is not found, it returns -1.
console.log(index); // 1
console.log(index2); // -1

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// loop the array

let fruits2 = ["apple", "banana", "orange", "kivi"];

for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i])
}

console.log("-------------------");

for (let i = 0; i < fruits2.length; i+=2) {
    console.log(fruits2[i])
}

// print the array in reverse order

console.log("-------------------");

for (let i = fruits2.length -1; i >= 0; i--) {
    console.log(fruits2[i])
}

// enhanced for loop

console.log("-------------------");

for (let fruit of fruits2) {
    console.log(fruit);
}

// sort the array

console.log("-------------------");

fruits2.sort(); // sort the array in ascending order.
console.log(fruits2);

// sort in reverse order
console.log("-------------------");

fruits2.sort().reverse(); // sort the array in descending order.