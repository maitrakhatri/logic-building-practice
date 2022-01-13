// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

const findMin = (...args) => Math.min(...args)

console.log(findMin(3,5,6,5,9,7,1,-5,5))

//method2

const findMin2 = (...args) => {
    let minEl = args[0];
    for(i=0; i<args.length; i++) {
        if(args[i+1] < args[i]) {
            minEl = args[i+1]
        }
    }
    return minEl;
}

console.log(findMin2(0,1,2,3,4,5))