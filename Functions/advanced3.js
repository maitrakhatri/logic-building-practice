// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const findMin2 = (array) => {
    for(i=0; i < array.length; i++) {
        for(j=0; j< (array.length -i -1); j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(array)
}

findMin2([100,83,32,9,45,61])