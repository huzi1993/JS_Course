//##################################### 1 #####################################

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(num - num, num--)); // ["Ahmed", "Elham", "Osama"];

// // Method 2

// // myFriends.pop();
// // console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends.splice(num - num, num));

//##################################### 2 #####################################

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.pop();
// friends.shift();

// console.log(friends); // ["Eman", "Osama"]

//##################################### 3 #####################################

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr = arrOne.concat(arrTwo).sort().reverse();

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//##################################### 4 #####################################

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].toUpperCase().slice(website.length)); // ZERO

//##################################### 5 #####################################
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// if (haystack.includes(needle) === true) {
//   console.log("Found");
// }
// if (haystack.indexOf(needle) !== -1) {
//   console.log("Found");
// }

// if (haystack.find((element) => element === needle) === needle) {
//   console.log("Found");
// }

//##################################### 6 #####################################
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort();
// allArrs = allArrs.slice(arr2.length).join("").toLowerCase();

// // Your Code Here

console.log(allArrs); // fxy
