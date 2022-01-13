// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

function arrayLength() {
    let arr = [], counter = 0;
    for(i=0; i<arguments.length; i++) {
        arr.push(arguments[i]);
        counter = counter + 1;
    }
    console.log(counter);
}

arrayLength(5,9,5,6,5,4,5)

//method2

const arrlen = (...args) => console.log(args.length)

arrlen(5,9,5,6,5,4,5)