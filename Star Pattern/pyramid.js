let n = parseInt(prompt("Enter the number of rows: "));

for (let i = 1; i <= n; i++){
    let row = "";

    row += "  ".repeat(n - i);
    row += "* ".repeat(i * 2 - 1);

    console.log(row);
}


//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 