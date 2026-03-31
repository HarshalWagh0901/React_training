let n = parseInt(prompt("Enter the number of rows: "));

for (let i = 1; i <=n; i++){
    let rows = "";
    for (let j = 1; j <= i; j ++) {
        rows += "* ";
    }
    console.log(rows);
}