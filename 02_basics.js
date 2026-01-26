// Number and Math in javascript 
// const balance = 100
// console.log(balance.toString().length)

// const balance = 100
// console.log(balance.toFixed(2))

// const otherNumber = 23.4562
// console.log(otherNumber.toPrecision(2))

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Math 
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.max(4 , 2 , 1 , 5));
// console.log(Math.min(4 , 1 , 2 , 3));

// console.log(Math.random());// the value always lie btw 0 and 1
// console.log((Math.random()*10) +1);// this is used so that are value can't be zero

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);