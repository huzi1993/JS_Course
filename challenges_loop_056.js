/*
Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Huzeyfe", "Stop", "Samera"];
let myEmployers = [
  "Amged",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Hani",
  "Hamza",
  "Anwar",
];

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);
document.write(`<hr></hr>`);
for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
  document.write(`<div> The Admin For Team ${i + 1} Is ${myAdmins[i]}`);

  document.write(`<h3>Team Members:</h3>`);
  let empCounter = 1;
  for (let j = 0; j < myEmployers.length; j++) {
    if (myEmployers[j][0] === myAdmins[i][0]) {
      document.write(`<p>${empCounter++}- ${myEmployers[j]}</p>`);
    }
  }
  document.write(`</div>`);
  document.write(`<hr></hr>`);
}
