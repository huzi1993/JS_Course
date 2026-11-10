//##################################### 1 #####################################

// let start = 10;
// let end = 100;
// let exclude = 40;

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// for (let i = start; i <= end; i += start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }

//##################################### 2 #####################################

// let start = 10;
// let end = 0;
// let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// for (let i = start; i >= end; i--) {
//   if (i < start) {
//     console.log(`0${i}`);
//   } else {
//     console.log(i);
//   }
//   if (i === stop) {
//     break;
//   }
// }

//##################################### 3 #####################################

// let start = 1;
// let end = 6;
// let breaker = 2;

// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4

// for (let i = start; i <= end; i++) {
//   console.log(i);
//   console.log(`-- ${breaker}`);
//   console.log(`-- ${breaker + breaker}`);
// }

//##################################### 4 #####################################
// let index = 10;
// let jump = 2;

// for (;;) {
//   if (index === jump) {
//     break;
//   }
//   console.log(index);
//   index -= jump;
// }

// Output
// 10
// 8
// 6
// 4

//##################################### 5 #####################################

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "s";

// // Output
// // "1 => Sayed"
// // "2 => Eman"
// // "3 => Mahmoud"
// // "4 => Osama"
// // "5 => Sameh"
// let counter = 0;
// for (let i = letter.length - letter.length; i < friends.length; i++) {
//   if (friends[i][0] !== letter.toUpperCase()) {
//     counter++;
//     console.log(`${counter} => ${friends[i]}`);
//   }
// }
//##################################### 6 #####################################

// let start = 0;
// let swappedName = "elZerO";
// let result = "";
// // Output
// // "ELzERo"

// for (let i = start; i < swappedName.length; i++) {
//   if (swappedName[i] == swappedName[i].toLowerCase()) {
//     result += swappedName[i].toUpperCase();
//   } else {
//     result += swappedName[i].toLowerCase();
//   }
// }
// console.log(result);
//##################################### 7 #####################################

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2
// 3
// 4

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] == "number" && mix[i] !== +true) {
    console.log(mix[i]);
  }
}
