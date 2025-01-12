// function myfunction() {
//     console.log("hey bro");
//     console.log("what's up!");
// }
// myfunction();


// function myfunction(msg) {
//     console.log(msg);
// }
// myfunction("i love js");


// sum using function
// function sum(a,b) {
//     console.log(a+b);
// }
// sum(1,2);


// arrow function
// const arrowSum = (a, b) => {
//     console.log(a+b);
// };


// const arrowMulti = (a, b) => {
//     console.log(a * b);
// };



// Practice question
// Take string as a input and return the number of vowels in the string
// function myString(str) {
//     let count = 0;
//     for (char of str) {
//         if (char == "a" || char == "e" | char == "i" || char == "o" | char == "u") {
//             count++;
//         }
//     }
//         console.log(count);
//     }

// create same for using arrow function
// const myString = (str) => {
//     let count = 0;
//          for (char of str) {
//             if (char == "a" || char == "e" | char == "i" || char == "o" | char == "u") {
//                  count++;
//             }
//         }
//         {
//         return count;
//         }
//     }


// CALLBACK FUNCTION -  a callback function is a function that is passed as an argument to another function
// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val); 
// });

// let arr = ["agra", "mumbai", "delhi"];
// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(),idx); 
// });

// for a given array of numbers , print the square of each value using forEach loop
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val*val);
// });


// MAP - The map() function in JavaScript is a method on the Array object that allows you to create a new array by applying a given function to each element of the original array.
// let arr = [1, 2, 3, 4];

// arr.map((val) => {
//     console.log(val);
// });

// let newArr = arr.map((val) => {
//     return val;
// });
// console.log(newArr);


// Filter - the filter() method is used to create a new array containing only the elements of an existing array that pass a specific test or condition.
// let arr = [1, 2, 3, 4, 5];
// let evenArr = arr.filter((val) => {
//     return val % 2 == 0;
// }); 
// console.log(evenArr);


// Reduce - perform some operations and reduces the array to a single value
// It returns that single value
// (result,current) - result is first value while current is 2nd
// let arr = [1, 2, 3, 4, 5];
// const output = arr.reduce((result, current) => {
//     return result + current;
// });
// console.log(output);

// to find largest using REDUCE
// let arr = [1, 2, 3, 4, 5];
// const output = arr.reduce((result, current) => {
//     return result > current? result : current;
// });
// console.log(output);

// practice 
// Q.1 - we are given array of marks of students. filter out of the marks that score 90+.
// let marks = [66 ,87, 99, 94, 88];
// let topper = marks.filter((val) => {
//     return val > 90;
// });
// console.log(topper);

// Q.2 - Take number n as a input from the user. create an array from number 1 to n
// use the reduce method to calculate sum of all numbers in the array.
let n = prompt("Enter a number : ");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
}
console.log(arr);

const sum = arr.reduce((result, current) => {
        return result + current;
    });
console.log(sum);