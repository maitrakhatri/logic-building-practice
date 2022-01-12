//Write a Program to take a number input from user and find if the number is Prime or not.

const num = Number(prompt("Enter Number: "));

for(i=2; i <=num; i++) {
    let rem = num%i;

    if (rem === 0) {
        if (i === num) {
            console.log("Prime");
            break;
        }
        else {
            console.log("Not Prime")
        }
        break;
    }
}