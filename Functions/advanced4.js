// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseCharactersOfWord = str => {

    const splitStr = str.split(" ");
    let arr = [];
    for(i=0; i<splitStr.length; i++) {
        if(splitStr[i] != "") {
            arr.push(splitStr[i]);
        }
    }

    let ans = []
    
    for(j=0; j<arr.length; j++) {
        let temp = arr[j];
        ans[j] = temp.split("").reverse().join("");
        arr[j] = ans;
    }

    console.log(ans.join(" "))
}

reverseCharactersOfWord('we are neoGrammers')