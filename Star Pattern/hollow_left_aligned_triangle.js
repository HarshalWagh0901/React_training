let n = parseInt(prompt("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
    let row = "";
    row += " ".repeat((n - i) * 2);
    for (let j = 1; j <= i; j++) {
        if (j ===1 || j === i || i === n){
            row += "* ";
        }
        else {
            row += "  ";
        }
    }
    console.log(row);
}


//             * 
//           * * 
//         *   * 
//       *     * 
//     *       * 
//   *         * 
// * * * * * * *