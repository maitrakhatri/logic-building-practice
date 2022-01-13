// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

const indexOf = (arr, target) => {
    let counter = 0
    for (i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            console.log(counter);
            break;
        }
        else {
            counter = counter + 1;
        }
    }
}

indexOf([1,5,6,9,8,4,], 8)

//method2
