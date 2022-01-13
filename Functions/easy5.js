// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9

const findMax = (...args) => Math.max(...args)

console.log(findMax(5,9,4,2,98,5))

//method2

const findMax2 = (...args) => {
    let maxEl = args[0];
    for(i=0; i<args.length; i++) {
        if(args[i+1] > args[i]) {
            maxEl = args[i+1]
        }
    }
    return maxEl;
}

console.log(findMax2(5,9,6,3,25,-9,-88))