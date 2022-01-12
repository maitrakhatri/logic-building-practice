//Write a program to take a number input from user and print multiplication table 12 times for that number

const num = 3;

for(i=1; i<=12; i++) {
    let result = num*i;
    console.log(`${num}*${i} = ${result}`)
}