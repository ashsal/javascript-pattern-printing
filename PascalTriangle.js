const totalRows = 5;
let triangle = [];
for (let i = 1; i <= totalRows; i++) {
  // row numbers
  triangle[i] = [];
  let row = "";
  //spaces
  for (let s = 1; s <= totalRows - i; s++) {
    row += " ";
  }

  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i) {
      //edge
      triangle[i][j] = 1;
    } else {
      // inside values
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    row += triangle[i][j] + " ";
  }
  console.log(row);
}
