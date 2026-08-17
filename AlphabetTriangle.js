/*console.log(String.fromCharCode(65));
console.log(String.fromCharCode(66));
console.log(String.fromCharCode(67));
console.log(String.fromCharCode(90));

console.log(String.fromCharCode(97));
console.log(String.fromCharCode(122));*/

const maxRows = 10;
for (let i = 1; i <= maxRows; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    //row += String.fromCharCode(96 + j) + " ";
    row += String.fromCharCode(64 + j) + " ";
  }
  console.log(row);
}
