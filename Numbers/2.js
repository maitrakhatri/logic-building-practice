// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

const p = prompt("P: ");
const r = prompt("R: ")
const t = prompt("T: ")

const si = (p*r*t) / 100;

console.log(si)