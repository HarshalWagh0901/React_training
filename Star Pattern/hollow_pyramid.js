let n = parseInt(prompt("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
    let row = "";

    row += "  ".repeat(n - i);

    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n) {
            row += "* ";
        }
        else {
            row += "  ";
        }
    }
    console.log(row);
}


//         * 
//       *   * 
//     *       * 
//   *           * 
// * * * * * * * * * 