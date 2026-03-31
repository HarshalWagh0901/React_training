// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array.

// spread = expands an array into individual elements
// rest = bundles seperate elements into an array.

function sum(...numbers) {

    let result = 0;

    for(let number of numbers){
        result += number;
    }
    return result;
}

// const total = sum(1, 2, 3, 4, 5, 6);

// console.log(`Total: ${total}`);

function getAvg(...numbers) {

    let result = 0;

    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAvg(1, 2, 3, 4, 5, 6);

console.log(`Average: ${total}`);


// -------------------------Combine strings ---------------------------

const fullString = combineString("Hello", "World", "How", "Are", "You", "?");

function combineString(...strings) {
    return strings.join(" ");
}

console.log(fullString);