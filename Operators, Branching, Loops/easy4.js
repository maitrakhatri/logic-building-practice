// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17

const num1=8, num2=23, num3=17;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`num1: ${num1} is the maximum`);
    }
    else {
        console.log(`num3: ${num3} is the maximum`)
    }
}

else {
    if (num2 > num3) {
        console.log(`num2: ${num2} is the maximum`);
    }
    else {
        console.log(`num3: ${num3} is the maximum`)
    }
}

//method2
const max = Math.max(num1,num2,num3)
console.log(`${max} is maximum`)