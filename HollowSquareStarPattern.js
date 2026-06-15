//const numberOfStarsInARow = 10;
function printHollowSquare(numberOfStarsInARow) {
  for (let i = 1; i <= numberOfStarsInARow; i++) {
    let row = "";
    for (let j = 1; j <= numberOfStarsInARow; j++) {
      if (
        i == 1 ||
        i == numberOfStarsInARow ||
        j == 1 ||
        j == numberOfStarsInARow
      ) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
printHollowSquare(15);
