// in javascript we can declare a variable in 3 ways./
//1.By using var
//2.using let
//3.using const

// var myName= "john";
// var myName = "J";
// console.log(myName);

// const myName="John";// this is not allowed in javascript
// re-assigning is not possible in const
// const does not allow to change the refrence content

let myName = "Akash";
// console.log(myName);

myName = "J";

// console.log(myName);// re-assigning is possible in let keyword

myName = 5;
console.log(myName);

// let myName="yoyo"// re-declaration is not allowed while using let keyword
//

// string interapolation
let firstName = "Akash";
let lastName = "Nagineni";
//console.log(firstName + " " + lastName)
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//  const myNam = "jo";

// Default PArameter

// function addTwoPara(num1,num2) {
//     return num1 + num2;
// }

// console.log(addTwoPara(1,2))

let addTwoPara = (num1, num2 = 5) => {
  // we pass default default value to protect our code from errors
  console.log(num1);
  console.log(num2);
  return num1 + num2;
};

console.log(addTwoPara(1)); //
//addTwoPara(1);

// Rest and spread operator
// these two are applicable in array and object in JS
let array = [1, 2, 3, 5, 6];
//(...array)symbol of spread operator

console.log(array); // this will print array

let newArray = [...array]; // this will not pass refrence
// let newArray = array;//this kind of array copy is passing the refrence of array.any change in one array will be reflected in original array.it will point to same memory location as original
newArray.push(10);
console.log(newArray);
console.log(array); //

//rest operator

let maxOfNumbers = (...numbers) => {
  console.log(numbers);
};
maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

// rest operator return an array

// Object
// it is always is in key value pair
let object = {
  name: "Akash",
  age: 24,
  city: "Vijayawada",
};

let boject2 = { ...object };
console.log(boject2);

let obj = {
  name: "Akash",
  age: 24,
  city: "delhi",
  address: {
    city: "gurgaon",
    state: "California",
    country: "USA",
  },
};

let obj1 = { ...obj }; // this copy is not passing refrence
obj1.name = "Aditya"; // this change will not visible in original array

console.log(obj);
console.log(obj1);

// but
obj1.address.city = "punjab";
console.log(obj1);
console.log(obj);

// when we have object inside object then while copying refrence is passed
