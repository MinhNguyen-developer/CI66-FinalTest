// 1
let multiply = 1;
let a = prompt("Enter array length: ");
// let n = prompt('Nhập số người: ')
let n = [];
for (let i = 0; i < a; i++) {
  let k = Number(prompt(`Enter index ${i + 1} of array: `));
  n[i] = k;
}
let max = n[0] * n[1];
console.log(n);
for (let i = 0; i < a; i++) {
  tich = n[i] * n[i + 1];
  if (max < multiply) {
    max = multiply;
  }
}
console.log(max);

// 2
function alternatingSums(a) {
  let sum1 = 0,
    sum2 = 0;

  let n = [];
  for (let i = 0; i < a; i++) {
    let k = Number(prompt(`Enter weight of person number: ${i + 1}: `));
    n[i] = k;
  }
  console.log(n);
  for (let i = 0; i < a; i += 2) {
    sum1 += n[i];
  }
  for (let i = 1; i < a; i += 2) {
    sum2 += n[i];
  }
  console.log(`[${sum1},${sum2}]`);
}
alternatingSums(5);
