// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

const arr = Array.from({length: 100}, (_, i) => i + 1)

const Fizzbuzz = element => {
    
    if (element % 3 === 0 && element % 5 === 0) {
        element = "FizzBuzz"
    }
    
    else if (element % 3 === 0) {
        element = "Fizz"
    }

    else if (element % 5 === 0) {
        element = "Buzz"
    }

    console.log(element)
}

arr.map(Fizzbuzz)