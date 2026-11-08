/*
Function Random Argument Challenge
Create Function showDetails
Function Accept 3 Parameters [a, b, c]
Data Types For Info Is
String => Name
Number > Age
Boolean => Status
Argument Is Random
Data Is Not Sorted Output Depend On Data Types
Use Ternary Conditional Operator
*/

function showDetails(input1, input2, input3) {
  let name = "";
  let age = 0;
  let message = "";
  // typeof input1 == "string"
  //   ? (name = input1)
  //   : typeof input1 == "number"
  //     ? (age = input1)
  //     : input1 === true
  //       ? (message = "Available")
  //       : (message = "Not Available");
  // typeof input2 == "string"
  //   ? (name = input2)
  //   : typeof input2 == "number"
  //     ? (age = input2)
  //     : input2 === true
  //       ? (message = "Available")
  //       : (message = "Not Available");
  // typeof input3 == "string"
  //   ? (name = input3)
  //   : typeof input3 == "number"
  //     ? (age = input3)
  //     : input3 === true
  //       ? (message = "Available")
  //       : (message = "Not Available");
  function checkValue(value) {
    typeof value == "string"
      ? (name = value)
      : typeof value == "number"
        ? (age = value)
        : value === true
          ? (message = "Available")
          : (message = "Not Available");
  }
  checkValue(input1);
  checkValue(input2);
  checkValue(input3);
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${message} For Hire`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
