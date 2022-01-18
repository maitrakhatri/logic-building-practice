// Write a JavaScript program to compute the sum of all digits that occur in a given string.

const str = prompt("Enter number in string");

let strArr = str.split("");

const convertIntoNum = arr => Number(arr)

const finalArr = strArr.map(convertIntoNum);

let sum = 0;

for(i=0; i<finalArr.length; i++) {
    sum = sum + finalArr[i];
}
console.log(sum)
