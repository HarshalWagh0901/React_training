let n = parseInt(prompt("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
    let row = "";
    row += " ".repeat((n - i) * 2);
    row += "* ".repeat(i);
    console.log(row);
}

//                   * 
//                 * * 
//               * * * 
//             * * * * 
//           * * * * * 
//         * * * * * * 
//       * * * * * * * 
//     * * * * * * * * 
//   * * * * * * * * * 
// * * * * * * * * * * 