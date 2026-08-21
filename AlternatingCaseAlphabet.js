/*console.log(String.fromCharCode(65));
console.log(String.fromCharCode(66));
console.log(String.fromCharCode(90));

console.log(String.fromCharCode(97));
console.log(String.fromCharCode(122));*/

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 === 0) {
      row += String.fromCharCode(64 + j) + " ";
    } else {
      row += String.fromCharCode(96 + j) + " ";
    }
  }
  console.log(row);
}
