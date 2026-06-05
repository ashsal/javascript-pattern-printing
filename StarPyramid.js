//const numberOfRows = 8;

function printPyramid(numberOfRows) {
  for (i = 1; i <= numberOfRows; i++) {
    let row = "";
    for (let j = 1; j <= numberOfRows - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

printPyramid(10);
