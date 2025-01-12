// let age = 15;
// if (age >= 18) {
//     console.log("you can vote");
// }
// else {
//     console.log("you can't vote");
// }


// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);


// using else
// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// else {
//     color = "white";
// }
// console.log(color);


// even or odd
// let num = 5;
// if (num % 2 === 0) {
//     console.log(num," is even");
// }
// else {
//     console.log(num,"is odd");
// }

// Ternary operator
// let age = 14;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);


// prompt & alert
// prompt("HELLO");
// alert("HELLO");


// let name = prompt("SAY MY NAME");
// console.log(name);


// EXERCISE - Get user to input a number using prompt("Ente a number") 
// & check if the number is multiple of 5 or not
// let num = prompt("Enter a number : ");
// if (num % 5 === 0) {
//     console.log(num,"is multiple of 5");
// }
// else {
//     console.log(num,"is not multiple of 5");
// }


// GRADES
let score = prompt("Enter your score : ");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A+";
}   else if (score >= 75 && score <= 90) {
    grade =" A";
}   else if (score >= 55 && score <= 75) {
    grade = "B";
}   else if (score >= 33 && score <= 55) {
    grade = "C";
}
console.log(grade);