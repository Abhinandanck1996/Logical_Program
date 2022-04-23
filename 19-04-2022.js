// //! 36. program to check leap year

// const year = prompt("Enter a year:");

// // function checkLeapYear(year) {
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     console.log(year + " is a leap year");
//   } else {
//     console.log(year + " is not a leap year");
//   }
// //}
// // checkLeapYear(year);

//! 30. Pyramid Pattern

// let n = 3;
// let count = 1;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

//! 62. Calculate Age

// function calculate_age(dob) {
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms);
  
//     return Math.abs(age_dt.getUTCFullYear() - 1969);
//   }
  
//   console.log(calculate_age(new Date(2022, 10, 30)));

// const format = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
//   format.format(2500);

  //! 44. Star Pattern

let n = 3;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//! 31. Trinagle pattern

// let n = 3;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);