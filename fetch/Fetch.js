// map ()

// let array= [ 1,2,3,4,5]
// let newArray = [];
// for (let i=0; i<array.length; i++)
// {
//     newArray[i] = array[i]*2;
// }

// console.log(newArray)

let array = [1, 2, 3, 4];

const functionforMap = (element) => {
  return element * element;
};
let newArray = array.map(functionforMap); // map return a new array
console.log(newArray);
console.log(array);

let array1 = array.map((element) => {
  return element * element;
});

console.log(array1);

// map take function as argument

// forEach loop()

let arr = [5, 6, 7, 8, 9];

let a = arr.forEach((value) => {
  console.log(value * 2); // it does not return anything. it return void
});

// filter: it also returns new array
let b = [10, 20, 30, 40, 50];
let c = b.filter((value) => {
  return value >= 30;
});
console.log(c);

// find(): it will run only for one time .at moment when condition is true .it will return

let d = [10, 20, 30, 40, 50];
let e = d.find((value) => {
  return value > 20;
});

console.log(e); //

// sort(): it is going to return an array with sorted values

// object destructure

let myObject = {
  name: "Akash",
  age: 24,
  address: {
    street: "Vasanth vihar ",
    city: "vijayawada",
    state: "AP",
    passportDetails: {
      passport: 6321,
    },
  },
};

console.log(myObject.address.passportDetails.passport);
let { names, age } = myObject;

console.log(names, age);
