// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

const arrayOfWords = str => {

    const splitStr = str.split(" ");
    let arr = [];
    for(i=0; i<splitStr.length; i++) {
        if(splitStr[i] != "") {
            arr.push(splitStr[i]);
        }
    }
    

    for(j=0; j<arr.length; j++) {
        let temp = arr[j];
        let newStr = temp[0].toUpperCase()+temp.slice(1);
        arr[j] = newStr;
    }

    const ans = arr.toString();
    console.log(ans.replace(/,/g, " "))

}

arrayOfWords("we are neoGrammers")