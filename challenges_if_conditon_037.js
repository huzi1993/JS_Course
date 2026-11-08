/*
If Challenge
*/

let a = 10;


if (a< 10) {

console.log(10);

} else if (a >= 10 && a <= 40) {

console.log("10 To 40");
}
else if (a > 40) {

console.log("> 40");

} else {

console.log("Unknown");

}
a < 10 ? console.log(10) :  a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log ("> 40") : console.log (Unknown);



// Write With Ternary If Syntax


let st = "Elzero Web School";

if ((st.length*2).toString() === "34") {
console.log("Good");
}
// W Poition May Change
if (st.substr(st.toLowerCase().indexOf("w"), 1).toLowerCase() === "w") {
console.log("Good");
}
if (+st !== "string") {
console.log("Good");
}
if ((typeof(st.length)).toString() === "number") {
console.log("Good");
}
if (st.slice(0, 6).repeat(2) == "ElzeroElzero") {
    console.log("Good");
}

console.log(st.slice(0, 6).repeat(2));