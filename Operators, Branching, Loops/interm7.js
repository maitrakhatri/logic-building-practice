//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"]
const weekends = ["saturday", "sunday"]

const userInput = prompt("Enter day: ")

if (weekdays.includes(userInput)) {
    console.log(`${userInput} is Weekday`)
}

else if (weekends.includes(userInput)) {
    console.log(`${userInput} is Weekend`)
}

else {
    console.log("Invalid Input !! Try again")
}