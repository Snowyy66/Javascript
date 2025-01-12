// let str1 = "Ashish sisodiya";
// let str2 = "student";
// console.log(str1[4]);
// console.log(str2[4]);

// Template literals
// let specialString = `ashish sisodiya`
// console.log(typeof(specialString))

// let obj = {
//     item : "pen",
//     price : 10,
// };
// let output = `The cost of ${obj.item} is ${obj.price}`;
// console.log(output);



// escape sequence
// console.log("Ashish\nsisodiya")
// console.log("Ashish\tsisodiya")


// string methods
// str.toUpperCase() - try this in console on browser
// str = "ashishsisodiya";
// newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

// str.trim()
// str = "  ashish sisodiya  ";
// console.log(str.trim());

// str.trim()
// str = "ashish";
// str2 ="01234567";
// console.log(str.slice(1,3));
// console.log(str2.slice(1,5));
// console.log(str.slice(3));

// str concat
// str1 = "Ashish";
// str2 = "sisodiya";
// let result = str1.concat(str2);
//  or
// let result = str1 + str2;
// console.log(result);


// str replace
// str = "Ashish";
// console.log(str.replace("A","H"));
// console.log(str.replaceAll("s","H"));



// charAt
// str = "Ashish";
// console.log(str.charAt(5));

// practice Q- prompt the user to enter their full name.
// Generate a username for them based on the input.start username with @,
// followed by their full name ending with the the fullname length.

let fullName = prompt("Enter your full name");
let username = "@" + fullName + fullName.length;
console.log(username);