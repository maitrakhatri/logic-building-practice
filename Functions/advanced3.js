// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const findMin2 = (array) => {
    let minEl = array[0];
    for(i=0; i<array.length; i++) {
        if(array[i+1] < array[i]) {
            minEl = array[i+1]
        }
    }
    return minEl;
}

console.log(findMin2([6,0,9,8,7]))