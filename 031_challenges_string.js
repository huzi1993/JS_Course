/*
String Challenge
All Solutions Must Be In One Chain
You Can Use Concatenate
*/
let a = "Elzero Web School";
// Include This Methods In Your Solution [slice, charAt]
console.log(a.slice(2, 3).toUpperCase()+a.slice(3,6)); // Zero
//8 H
console.log(a.slice(-4,-3).toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(a.split(" ")[0]); // [Elzero]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,7) + a.substr(-6, 1).toUpperCase() + a.substr(-5)); // Elzero School
// Solution Must Be Dynamic And String May Change
console.log(a[0].toLowerCase()+ a.substring(1,a.length-1).toUpperCase() + a[a.length-1].toLowerCase()); // eLZERO WEB SCHOOl