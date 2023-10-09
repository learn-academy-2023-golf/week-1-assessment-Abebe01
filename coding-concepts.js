// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: The returned value will be a number. Specifically 10. 
// b) Verify and explain: The returned value was infact 10. as the command ".length" returns the the total number of items in the string as a single number. 

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: The command calls upon the 4th index in the string. The index of the string starts at 0; which would be "H". and the 4th being "o". 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "JavaScript"
// b) Verify and explain: I got this one wrong. For somereason I did not begin the index at 0 and counted Javascript as 1. The returned value is 1 as JS would be index , Ruby 1, Python 2, and C++ 3. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: error
// b) Verify and explain: The return was an error, but not for the reason I thought. I thought by adding quotation marks inside of the paranthesis it may be able to execute the command, but after checking, it did not. I think each index has to be called on/ specificed. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number 
// b) Verify and explain: the command is asking what type of data is the "length" of the array. Which will always be a number. 
