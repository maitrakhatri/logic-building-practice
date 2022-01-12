//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

let i=0, j=1;
const limit = prompt("Prit first x terms of Fibonacci Series: ");

console.log(i)
console.log(j)
for(a=0; a<(limit-2); a++) {
    let k = i+j;
    console.log(k)
    i = j;
    j =k
}