// // let num = parseInt(prompt("Enter a number"));
// // if (num > 0) {
// //   console.log("Number is positive");
// // } else if (num == 0) {
// //     console.log("Number is zero");
// // } else {
// //     console.log("Number is Negative");
// // }

// // product of array
// var arr1 = [1, 5, 3, 6, 9, 12];
// var product = 1;
// let y = arr1.forEach((value) => {
//   if (value % 2 == 0 && value % 3 == 0) {
//     product *= value;
//   }
// });
// console.log(product);

//  //! 59. Check whether a given number is in a given range

// // function is_inrange(x, y, z) {
// //     return y >= x && y <= z;
// //   }
  
// //   console.log(is_inrange (1, 2, 3));
// //   console.log(is_inrange(1, 2, -3));
// //   console.log(is_inrange(1.1, 1.2, 1.3));

// //   let array=[1, 5, 3, 6, 9, 12];
// //   let newarray=array.reduce((data,value)=>{
// //       return data*=value;
// //   })
// //   console.log(newarray);

// //! 49. Find radius of a circle
//   var radius, diameter, circum, area;
// radius = 4;
// diameter = 2 * radius;
// circum = 2 * Math.PI * radius;
// area = Math.PI * (radius * radius);
// console.log(diameter);
// console.log(circum);
// console.log(area);


// // ! 51. Random number from 1 to 10

// const a = Math.random() * (10 - 1) + 1;
// console.log(`Random value between 1 and 10 is ${a}`);

// reverse string

let str = "Hello World";
let reversestr = "";
for (let i = str.length-1; i >= 0; i--) {
  reversestr += str[i];
  
}
console.log(reversestr);


let string = "Hello World"
let newstr = string.split('').reverse().join('')
console.log(newstr);