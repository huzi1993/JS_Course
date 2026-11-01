/*
Switch Challenge
*/

// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// Write With Ternary If Syntax
switch (job) {
  case job === "Manager":
    salary = 8000;
    break;
  case job === "IT":
  case job === "Support":
    salary = 6000;
    break;
  case job === "Developer":
  case job === "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}
console.log(salary);
