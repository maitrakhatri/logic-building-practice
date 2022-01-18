// Write a Program to convert Decimal to Binary.

const num = prompt("Add number in decimal: ");

let binaryArr = []
let remainder = null;
let quotient = null;

remainder = num%2;
quotient = Math.trunc(num/2)
binaryArr.push(remainder)

while(quotient != 0) {
    remainder = quotient%2;
    binaryArr.push(remainder);
    quotient = Math.trunc(quotient/2);
}

const finalAnsInBinary = binaryArr.reverse().join("");

console.log(finalAnsInBinary)