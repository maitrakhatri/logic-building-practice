// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const str = "We are neoGrammers"

const noOfWords = str => {

    const splitStr = str.split(" ");
    let counter = 0;
    for(i=0; i<splitStr.length; i++) {
        if(splitStr[i] != "") {
            counter = counter+1;
        }
    }
    return counter
}

console.log(noOfWords("We are neoGrammers"))

