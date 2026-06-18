const numberOfRows = 5;
for (i = numberOfRows; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= numberOfRows - i; j++) {
    row += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}

for (i = 2; i <= numberOfRows; i++) {
  let row = "";
  for (let j = 1; j <= numberOfRows - i; j++) {
    row += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}
