// function myFunction(a,b){
//     return a*b
// }
// console.log(myFunction(5,6))


// as a variable

// let a = toMultiply(5)
// function toMultiply(b){
//     return b*b
// }
// console.log("Answer is",a)

// local variable

//can not use carName
const carNameFunction = () => {
    let carName = "volvo"
    console.log(carName)
};

carNameFunction()
// console.log(carName) // Reference error


// console.log('One');
// setTimeout(() => console.log('Two'), 1000);
// console.log('Three');
// // LOGS: 'One', 'Three', 'Two'

const fs = require('fs');

try {
  const data = fs.readFileSync('file1.txt', 'utf8');
  console.log(data);
} catch (error) {
  console.error('Error reading file:', error);
}