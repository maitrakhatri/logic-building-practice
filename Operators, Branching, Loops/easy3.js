// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const num1 = 129, num2 = 251;

//method1
if (num1>num2) {
    console.log(`num1: ${num1} is maximum`);
    console.log(`num2: ${num2} is minimum`);
}

else {
    console.log(`num2: ${num2} is maximum`);
    console.log(`num1: ${num1} is minimum`);
}

//method2
const max = Math.max(num1,num2);
const min = Math.min(num1,num2)
console.log(`The maximum number is ${max}
The minimum number is ${min}`)