const maxRows = 5;
let num = 1;
for (let i = 1; i <= maxRows; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (num % 2 === 1) {
      //odd
      row += "1 ";
    } else {
      row += "0 ";
    }

    num++;
  }
  console.log(row);
}

console.log("-------------------");

for (let i = 1; i <= maxRows; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 === 0) {
      row += "1 ";
    } else {
      row += "0 ";
    }
  }
  console.log(row);
}
