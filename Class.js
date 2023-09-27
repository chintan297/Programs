// class Hello{                            // class declaration
//      constructor(name,age){              // constructor
//         this.name = name
//         this.age = age
//     }
//     details(){
//         console.log(this.name,this.age)
//     }
// }

// let a = new Hello("John",23)
// a.details()

// // unnamed class are redeclare

var emp = class{
    constructor(){
        this.name = "Rajubhai"
    }
    displays(){
        return this.name
        // console.log(this.name)
    }
}
let e1 = new emp()
console.log(e1.displays())

var emp = class{
    constructor(){
        this.name = "Khajurbhai"
    }
    displays(){
        // return this.name
        console.log(this.name)
    }
}
let e2 = new emp()
e2.displays()
// console.log(e2.displays())

// // named class

// var emp1 = class Employee{
//     constructor(){
//         this.name = "Rajubhai"
//     }
//     displays(){
//         return this.name
//         // console.log(this.name)
//     }
// }
// let e3 = new emp1()
// console.log(e3.displays())

// Create a car method to find car age using class and constructor

// class Car{
//     constructor(name,purchaseYear){
//         this.carName = name
//         this.buy = purchaseYear

//     }
//     age(){
//         let date = new Date()
//         return (date.getFullYear()-this.buy)
//     }
// }
// let carAge = new Car("Volvo",2015)
// console.log("Car age is :",carAge.age())

// console.log(typeof(Car))

//prototype - we can using prototype add new properties(including methods)

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// Person.prototype.gender = "Male"
// Person.prototype.details = function() {
//     console.log(this.name, this.age, this.gender);
//   }
// let a = new Person("John", 23);
// a.details();

// class User{
//     constructor(){
//         console.log("Hello")
//     }
// }
// console.log(User);

// return a class

// function abc(p){
//     return class{
//         sayHi(){
//             console.log(p)
//         }
//     }
// }
// let xyz = abc("Hello")
// new xyz().sayHi()

// getter and setter

// const person = {
//   name: "John",
//   age: 23,
//   language: "",
//   set lang(lang) {
//     return this.language = lang;
//   },
// };
// person.lang = "Hindi"
// console.log(person.language)

// const person1 = {
//     name: "John",
//     age: 23,
//     language: "English",
//     get lang() {
//       return this.language;
//     },
//   };

//   console.log(person1.lang)

// computed names [...]

// class User{
//     constructor(name){
//         this.name = name
//     }
//     ['say'+'Hey'](){
//         console.log("Say Hello...",this.name)
//     }
// }
// let u = new User("John")
// u.sayHey()

// class Button{
//     constructor(value){
//         this.value= value
//     }
//     Click=()=>{
//         console.log(this.value)
//     }

// }
// let b= new Button("John")
// setTimeout(()=>{
//     b.Click()
// },1000)

// Super() keyword

// class Company{
//     constructor(){
//         this.Company = "Big Bull"
//     }
// }
// class Employee extends Company{

//        constructor(id,name){
//         super()
//         this.id = id
//         this.name = name
//     }
//     display(){
//         console.log(this.id,this.name,this.Company)
//     }
// }
// let emp = new Employee(10,"John wick")
// emp.display()



