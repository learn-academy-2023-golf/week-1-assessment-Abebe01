// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
// Expected output: 9

// Pseudo code: Concat is used to join two arrays together. So console.log placing cocnat inbetween the two arrays will combine them and display them as one array. Adding .length to the end of the console.log will then return the number of the total index's given in the combined array.

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
console.log(currentCohort.split("").reverse().join(""))
// Expected output: "3202 NRAEL"

// Pseudo code: To the return the desired string. The string included in "currentCohort" must first be first be broken up by each index using "split(""), then reversed using "reverse()", then re-joined per using "join("")".

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// const onlyOdds = [stockExchange] => {
//     let newArr = [] 
//     for(let i = 0; i < stockExchange.length; i ++) {
//         if(stockExchange[i] % 2 == 1) {
//             newArr.push(stockExchange[i])
//         }
//     }
//     return newArr
// }
// console.log(onlyOdds(stockExchange))

for(let i = 0; i < stockExchange.length; i ++) {
    if(stockExchange[i] % 2 == 1) {
        console.log(stockExchange[i])
    } else if(stockExchange[i] % 2 == -1) {
        console.log(stockExchange[i])
    }
}
// Expected output: 13 5 -5 27

// Pseudo code: 

// Not gonna lie, this one took me forecer to figure out. Using a for loop. I identified i as the 0 index. Set it less than the length of the const. added 1 using ++ to cycle through each index as needed. Then used a conditional statement to identify if the remainder of the selected index of the array is 1, or an "odd" number; to console.log that index specifically and return the desired display. The wall i ran into here was trying the get the -5 to display. Eventually i refrenced the JS conditionals page via slack and added an "else if" to the condiotinal with the exact same coding but using a "-1" as the desired remainder from the module. Finally including the -5 in the final output! 
