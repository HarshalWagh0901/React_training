let n = parseInt(prompt("Enter the number of rows: "));

for (let i = n; i >= 1; i--) {
    let rows = "";
    for (let j = i; j >= 1; j--) {
        if (j === 1 || j === i || i === n) {
            rows += "* ";
        }
        else {
            rows += "  ";
        }
    }
    console.log(rows);
}


// * * * * * 
// *     * 
// *   * 
// * * 
// *