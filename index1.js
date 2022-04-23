// let number = 5;
// let isPrime = true;
// if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is a not prime number`);
//   } 
// }

// //! 28. Find Largest number from an array

// var arr = [3, 6, 2, 56, 32, 5, 8, 32];
// var largest = arr[0];
// console.log(largest);
// for (var i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

var array1 = [10, 98, 54, 23, 78, 45];
for (let i = 1; i < array1.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array1[i] <array1[j]) {
      let temp = array1[i];
      array1[i] = array1[j];
      array1[j] = temp;
    }
  }
}
console.log(array1);