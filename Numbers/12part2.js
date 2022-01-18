// Write a Program to Convert Octal to Decimal.

const num = "564";
const  numArr = num.split("").reverse();
let sum = 0;
for(i=0; i<numArr.length; i++) {
    let value = numArr[i]*(Math.pow(8,i))
    sum = sum + value;
}

console.log(sum)