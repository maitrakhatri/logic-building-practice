// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const replace = (arr, target, newValue) => {
    for (i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            arr[i] = newValue;
            console.log(arr)
            break;
        }
    }
}

replace([1,5,3,5,6,8], 3, 10)