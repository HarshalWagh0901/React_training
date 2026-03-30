// let student = 30;

// student += 1;
// student -= 1;
// student =  student * 2;
// student = student / 2;
// student = student ** 2;
// student %= 2;l


// // console.log(student);

// let result = 12 % 5 + 8 /2;

// console.log(result)

// ------------------------- User Input -------------------------

// let username;

// document.getElementById("myButton").onclick = function() {
//     username = document.getElementById("myInput").value;
//     // console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// ------------------------- Type Conversion -------------------------

// let age = window.prompt("Enter your age: ");
// age = Number(age);
// age += 1;

// console.log(age, typeof age); // This will concatenate 1 to the age string      op = 241

// let x = "Pizza";
// let y = "Pizza";
// let z = "Pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x); // NaN, number
// console.log(y, typeof y);       // Pizza, string
// console.log(z, typeof z);       // true, boolean

// ------------------------ Const -------------------------
// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("myButton").onclick = function() {
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("myH3").textContent = circumference;
}