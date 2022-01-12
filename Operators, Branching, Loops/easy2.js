// Write a program to take a number input from user and determine whether the number is odd or even.

const num = Number(prompt("Enter a number: "));

if(num%2 === 0) {
    console.log(`your number: ${num} is Even`);
}

else {
    console.log(`your number: ${num} is Odd`);
}