// Function = A section of a reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute the code.

// function happyBirthday(username, age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}.`);
//     console.log("Happy Birthday to you!");
//     console.log(`You are ${age} years old!`);
// }

// happyBirthday("Harshal", 24);
// happyBirthday("Tejas", 25);


// ------------ return keyword ----------------------

function add(x, y) {
    let result = x + y;
    return result;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function isEven(number) {
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("demo@fake.com"));

let addidion = add(10, 20);
console.log(addidion);

console.log(isEven(110));