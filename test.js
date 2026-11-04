/*
Arrays Challenges
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ammer"];
// Write Code Here
console.log(my.reverse().slice(--counter)); //["Osama", "Elham", "Mazero", "Ahmed"]
console.log(my.slice(++counter, --my.length)); //["Elham", "Mazero"]
console.log((my.splice(zero, zero, "Elzero"), my[zero]));
console.log(my[zero][++counter] + my[0][++counter].toUpperCase()); //"rO"َ
