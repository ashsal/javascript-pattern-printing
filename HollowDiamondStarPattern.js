const numberOfRows = 5;
for (let i = 1; i <= numberOfRows; i++) {
  let row = "";
  for (let j = 1; j <= numberOfRows - i; j++) {
    row += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

for (let i = numberOfRows - 1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= numberOfRows - i; j++) {
    row += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
