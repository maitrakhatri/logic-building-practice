// Write a Program to Print N Odd Number in Descending Order.

const n = prompt("Enter number: ")

for(i=2*n; i>0; i--) {
    if(i%2 != 0) {
        console.log(i);
    }
}
