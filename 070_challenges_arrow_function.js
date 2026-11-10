// // let names = function (...names) {
// //   return `String [${names.join("], [")}] => Done !`;
// // };

// // console.log(names("Huzeyfe", "Ali", "Waddah"));

// //Arrow Function
// let names = (...names) => `String [${names.join("], [")}] => Done !`;
// console.log(names("Huzeyfe", "Ali", "Waddah", "Semir", "Wail"));

/*=========================================*/

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums[0];

function calc(one, two, ...nums) {
  return one + two + nums[0];
}
console.log(calc(10, ...myNumbers)); // 80
