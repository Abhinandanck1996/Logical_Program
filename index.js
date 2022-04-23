// var arrayList = ["a", "b", "c", "d", "e", "f"];
// // // var anotherArrayList = arrayList;
// arrayList = [];
// // console.log(anotherArrayList);
// console.log(arrayList);

// let a = [1,2,3,4];
// a.splice(0,a.length);
// console.log(a);
// while(a.length > 0) {
//     a.shift();
//     a++;
// }
// console.log(a);

// let c=5;
// let fact=1;

// for (let index = 1; index<=c; index++) {
//      fact*=index;
// }
// console.log(fact);

// let array=[1,20,30,40,50]
// let newarray=array.map((data,value)=>{
//     if (value%2==0) {
//         return data*2;
//     }
//     else{
//         return data;
//     }
// })
// console.log(newarray);


// let d=10;
// for (let index = 1; index<=d;index++){
// if (d%index ==0) {
//     console.log(index);
// }
// }   

function validateEmail(email_id) {
    const regex_pattern =
      ///^[a-z A-Z 0-9 .!#$%&-`*+/=?^-`{|}~-]+@[a-z A-Z 0-9]/;
      /^[a-z]{4}/;
  
    if (regex_pattern.test(email_id)) {
      console.log("The email address is valid");
    } else {
      console.log("The email address is not valid");
    }
  }
  
  validateEmail("abhi777");

  var arr = [1, 2, 3, 4, 5, 6];
if (arr.length === 0) {
  console.log("Array is Empty");
} else {
    console.log("Array is Not Empty");
}

var array = [10, 98, 54,23, 78, 45];
for (let i = 1; i < array.length; i++) {
  for (let j = i+1; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);