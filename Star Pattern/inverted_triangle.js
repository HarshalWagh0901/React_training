let n = parseInt(prompt("Enter the number of rows: "));

for (let i = n; i >= 1; i--){
    let rows = "";
    for (let j = i; j >= 1;j--){
        rows += "* ";
    }
    console.log(rows);
}

// * * * * *
// * * * *
// * * *
// * *
// * 