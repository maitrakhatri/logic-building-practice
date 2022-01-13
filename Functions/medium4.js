// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const push = (newarr, arr) => {
    for(i=0; i<arr.length; i++) {
        newarr.push(arr[i])
    }
}

const mergeArray = (arr1, arr2) => {
    let finalarr = [];
    push(finalarr, arr1);
    push(finalarr, arr2);
    console.log(finalarr);
}

mergeArray([1,3,5,7], [2,4,6,8])