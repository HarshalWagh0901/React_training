// let n = parseInt(prompt("Enter the number of rows: "));

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     row += "  ".repeat(n - i);

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         if (j === 1 || j === 2 * i - 1 || i === n) {
//             row += "* ";
//         }
//         else {
//             row += "  ";
//         }
//     }
//     console.log(row);
// }


//         * 
//       *   * 
//     *       * 
//   *           * 
// * * * * * * * * * 


// function avg(arr){
//     return arr.reduce((a, b) => a + b, 0) / arr.length;
// }

// a = avg([1, 2, 3, 4, 5]);
// console.log(a);

let userDetails = {
    name: prompt("Enter your name: "),
    age: parseInt(prompt("Enter your age: "))
}

console.log(userDetails);