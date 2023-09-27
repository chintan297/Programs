const person = {
    fName : "Chintan",
    lName  : "Akbari",
    age : 21,
    developer : false,
    fullNamne :function(){
        return this.fName + " " + this.lName;
    }
    
 }
// console.log(Object.values(person))

// console.log(person)             // accessing object
// console.log(person.fName)       // accessing object properties
// console.log(person["lName"])    //second way yo accessing object properties
// console.log(person.fullNamne())


//Object methods

// let user = {

// }
// function sayHi(){
//     console.log("hello")
// }
// user.sayHi = sayHi;
// user.sayHi()


// let user = {
//     name : "john",
//     age : 30,

//     sayHi(){
//         let arrow =()=>{
//             console.log(this.name) //print
//         }
//       arrow()
//     }
// }
// user.sayHi() 
// let admin = user;
// user = null;
// admin.sayHi() // ptint 
// user.sayHi()   // error


// Task 1

// function makeUser(){
//     return{
//         name: "john",
//         ref: function sayHi(){
//             return this.name
//         }
//     };
// }
// let user = makeUser();
// console.log(user.ref())


// let calculator = {
//     read(){
//          this.a = BigInt(prompt("Enter value of a = "))
//          this.b = BigInt(prompt("Enter value of b = "))
//     },
//     sum(){
//         return (a * b)
//     }
// }
// calculator.read()
// alert(calculator.sum())


// const order = {
//     isStuding : false,
//     printIntroduction : function(){
//         console.log(`${this.name} is young man and he is studing ? ${this.isStuding}`)
//     }
    
// }
// const john = Object.create(order)
// john.name = "john"
// john.isStuding =true
// john.printIntroduction()


// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false,
//   };
// let object2 = Object.entries(object1)
// for (const key in object2) {
//     console.log( object2[key])
// }


let numbers = {
    43:"a",
    32:"b",
    89:"c",
    2:"d"
}
console.log(Object.values(numbers))