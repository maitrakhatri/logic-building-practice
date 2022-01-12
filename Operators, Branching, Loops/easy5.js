// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const num1=35, num2=29, num3=46;

if (num1 < num2) {
    if (num1 < num2) {
        console.log(`num1: ${num1} is the minimum`)
    }

    else {
        console.log(`num3: ${num3} is the minimum`)
    }
}

else {
    if (num2 < num3) {
        console.log(`num2: ${num2} is the minimum`)
    }

    else {
        console.log(`num3: ${num3} is the minimum`)
    }
}

//method2
const min = Math.min(num1,num2,num3)
console.log(`${min} is the minimum`)