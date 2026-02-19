//ASSIGNMENT

//const firstName = "Onye";
//console.log(firstName);

//const lastName = "Samp";
//console.log(lastName);

//const age = 75;
//console.log(age);

//const gender = "Male";
//console.log(gender);

//const phoneNumber = 803377;
//console.log(phoneNumber);

//const email = "samman144@yahoo.com";
//console.log(email);

// ASSIGNMENT
// CREATE A PROGRAM THAT STORES A STUDENT SCORE AS A STRING

/*
let score = "69.8";
console.log(typeof (score));
console.log(typeof (parseInt(score)));
//const score = number;
//console.log(typeof (score.toFixed(score(0))));

//console.log(typeof(decimal.toFixed(1)))

if (score >= 70) {
    console.log(`Your score is ${score} and your Grade is A`)
} else if (score >= 60 && score <= 69) {
    console.log(`Your score is ${score} and your Grade is B`)
} else if (score >= 50 && score <= 59) {
    console.log(`Your score is ${score} and your Grade is C`)
} else if (score >= 40 && score <= 49) {
    console.log(`Your score is ${score} and your Grade is D`)
} else {
    console.log(`Your score is ${score} and your Grade is F`)
}
*/

//Assignment

const numbers = [, 2, 3, 4, 5, 7, 9, 10, 50];
//console.log(numbers);

// Remove the empty space
numbers.shift();
console.log(numbers);
// Add the missing numbers
numbers.unshift(1);
console.log(numbers);
// Adding other Missing Numbers
numbers.unshift(6, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
);
console.log(numbers)

//Sort()
console.log(numbers.sort());