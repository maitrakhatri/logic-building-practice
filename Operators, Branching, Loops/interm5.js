// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const num = prompt("Finds factorial of: ")

const factorial = num => {

    if (num === 0) {
        return 1;
    }

    else if (num > 0) {
        let ans = num*factorial(num-1);
        return ans;
    }
}

console.log(`Factorial of ${num} is ${factorial(num)}`)