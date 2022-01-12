//Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const months = {
    jan: 31,
    feb: 28,
    mar: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    aug: 31,
    sept: 30,
    oct: 31,
    nov: 30,
    dec: 31
}

const userInput = prompt("Enter month: ")

if (months[userInput] === 31) {
    console.log(`yes ${userInput} has 31 days`)
}

else {
    console.log(`no ${userInput} does not have 31 days`)
}

//method 2

const monthsWith31Days = ["jan", "mar", "may", "july", "aug", "oct", "dec"]

if (monthsWith31Days.includes(userInput)) {
    console.log(`yes ${userInput} has 31 days`)
}

else {
    console.log(`no ${userInput} does not have 31 days`)
}

//method3

if (monthsWith31Days.indexOf(userInput) === -1 ) {
    console.log(`no ${userInput} does not have 31 days`)
}

else {
    console.log(`yes ${userInput} has 31 days`)
}