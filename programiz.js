// // sqrt
// console.log(Math.sqrt(4))

// //area of triangle
// let l = 20
// let b = 10
// console.log((l*b)/2)

// //swap numbers

// console.log("l is "+l,"b is "+b)
// let tmp
// tmp = l
// l = b
// b = tmp
// console.log("l is "+l,"b is "+b)

// // kilometer to miles

// let km = 2.2
// let miles = 0.621371

// let sum = km * miles
// console.log(sum)

// // random number

// console.log(Math.round(Math.random()*201)-100)

// number is zero positive or nagative

// let n = Math.round(Math.random()*201)-100
// console.log(n)
// if (n<0) {
//     console.log("Number is nagative")
// }
// else if(n == 0){
//     console.log("Number is zero")
// }
// else{
//     console.log("Number is positive")
// }

//number is odd or even

// let num = Math.round(Math.random()*100)
// console.log(num)

// if(num%2==0){
//     console.log("Number is even")
// }
// else{
//     console.log("Number is odd")
// }

//find largest number given three number

// let a = Math.round(Math.random()*100)
// let b = Math.round(Math.random()*100)
// let c = Math.round(Math.random()*100)
// console.log(a,b,c)
// if(a==b || b == c || a==c){
//     console.log("Similler Item")
// }
// else if(a<b && c<b){

//         console.log("B is large")

// }
// else if(a<c && b<c){

//         console.log("C is large")

// }
// else{
//     console.log("A is Large")
// }

//check prime number

// let n = 97;
// let isPrime = true;
// if (n == 1) {
//   console.log("1 is not prime number");
// } else {
//   for (i = 2; i < n; i++) {
//     if (n % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log("Number is prime");
//   } else {
//     console.log("Number is not prime");
//   }
// }

//print all prime number between large and hiehest number

// let low = 5;
// let high = 30;
// let prime_Numbers = [];

// for (let i = low; i <= high; i++) {
//   var prime = true;
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) {
//     prime_Numbers.push(j);
//   }
// }

// console.log(prime_Numbers);


// find factorial of number

// let num = 4 
// let factorials= 1
// for(let i=1;i<=num;i++){
//      factorials *= i
// }
// console.log(factorials)


// multiplication table

// let n = 5
// for(i=1;i<=10;i++){
//     console.log(n + "*" + i + "="+ (n*i))
// }


//print the fibonaci series
// let end = 8
// let n1 = 0
// let n2 = 1
// let nextN ;


// for(i=1;i<=end;i++){
//     console.log(n1)
//     nextN = n1+n2
//     n1 = n2
//     n2 = nextN
// }

let number = 153

let n = Array.from(String(number))
console.log(n)
for (i=0;i<n.length;i++){
    console.log(n[i]*n[i]*n[i])
}


