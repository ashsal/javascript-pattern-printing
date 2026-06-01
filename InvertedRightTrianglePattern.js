function print(rows) {
  // validate that rows is a positive integer
  for (let i = rows; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
      //console.log(i, j);
    }
    console.log(row);
  }
}
print(8);
