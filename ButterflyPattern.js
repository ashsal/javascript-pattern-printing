const maxRows = 5;
for (let i = 1; i <= maxRows; i++) {
  // i is current row number
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  for (let j = 1; j <= 2 * (maxRows - i); j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

for (let i = maxRows - 1; i >= 1; i--) {
  // i is current row number
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  for (let j = 1; j <= 2 * (maxRows - i); j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
