// Given a and b, your function should return the value of a^b
// Example:
// Input: power(2,3) ––> Output: 8

const num = 2, pow = 3;

const power = (num,pow) => {

    let sum = 1;
    for(i=0; i<pow; i++) {
        sum = sum*num;
    }
    return sum;
}

console.log(power(num,pow))

//method2

const ans = Math.pow(num,pow);
console.log(ans)