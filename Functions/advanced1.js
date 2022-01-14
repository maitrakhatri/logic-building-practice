// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const encodeString = (str, n) => {
    let newStr= "";
    for(i=0; i<str.length; i++) {
        let a = alphabet.indexOf(str[i])
        newStr = newStr + alphabet[a+n]   
    }
    console.log(newStr)
}

encodeString("neogcamp", 2)