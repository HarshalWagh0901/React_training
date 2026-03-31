let n = parseInt(prompt("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
    let rows = "";
    for (let j = 1; j <= i; j++) {
        // Print star only at the border or the last row.
        if (j === 1 || j === i || i === n) {
            rows += "* ";
        }
        else {
            rows += "  ";
        }
    }
    console.log(rows);
}


// * 
// * * 
// *   * 
// *     * 
// * * * * *