// let user  ={
//     name : "John",
//     add : {
//         city : "Mumbai"
//     }
// }

// //Object.freeze()

// // Object.freeze(user)
// // user.name = "Smith"
// // user.add.city = "HYD"
// // delete user.name
// // console.log(user)
// // console.log(user.add)
// // console.log(Object.isFrozen(user))

// // dObject.seal()

// // Object.seal(user)
// // console.log(Object.isSealed(user))
// // user.fname= "Raju"
// // console.log(user)
// // delete user.name
// // console.log(user.name = "Raju")
// // console.log(user)

// // // Object.preventExtensions()

// // Object.preventExtensions(user)
// // console.log(Object.isExtensible(user))
// // user.surname = "Smith"
// // console.log(user)

// // let user1 = {
// //     name : "John"
// // }
// // let user2 = user
// // user2.age = 19
// // // console.log(user)
// // // console.log(user1)
// // // console.log(user === user1)
// // // console.log(user.name == user1.name)
// // // console.log(user2)
// // // console.log(user2.age = 20)
// // // console.log(user)
// // // console.log(user1)
// // // console.log(user2)
// // // console.log(user == user2)

// // // Object add property methods

// // Object.defineProperty(user,"age",{
// //     value : "20"                        // Object.defineProperty()
// // })
// // // console.log(user)
// // user.address = "London"                 // Using dot (.) operator
// // // console.log(user)
// // user['street'] = "CG Road"              // using square brackets
// // // console.log(user)
// // const em = {
// //     nationality : "Indian"
// // }
// // console.log(Object.assign(user,em))
// // console.log(user)
// // console.log(em)    // Object.assign(obj1,obj2)

// // const object1 = {
// //     a: 1,
// //     b: 2,
// //     c: 3
// //   };
// //   const object3= {
// //     g: 1,
// //     h: 2,
// //     i: 3
// //   };
// //   const object2 = Object.assign({g: 34, h: 25,j:5}, object1);
// //   const object4 = Object.assign({g: 34, h: 25,j:5}, object3);
// // //   console.log(object2);
// //   console.log(object4);

// // // console.log(user)
// // Object.freeze(user)
// // user.address.city = "HYD"
// // user.name = "Smith"
// // const userEmp = {
// //     ...user, ...em
// // }
// // console.log(userEmp)

//   // Object.defineProperty()

// //   let user = {}
// //   Object.defineProperty(user,"name",{
// //     value : "John",
// //     value : "Smith"
// //   })
// //   console.log(user)

// //   let admin = {}
// //   Object.defineProperty(admin,"age",{
// //     value : 45,
// //     value : 32 * 2,
// //     value : 76
// //   })
// //   console.log(admin)

// //   let a = [2,3,5,6]
// //   let b = [1,4,7,8]
// //   let c = [...a,...b]
// //   console.log(c)
// //   let d = c.sort(function(a,b){a-b}).reverse()
// //   console.log(d)

// // let a = "53453"
// // let b = a.split("").sort().join("")
// // console.log(b)

// // let c = "web master"
// // console.log(c.split("").sort().join(""))
// // let d = c.split(" ")
// // let e =[]
// // for(i=0;i<d.length;i++){
// //    e.push(d[i].at(0).toUpperCase()+ d[i].slice(1))
// // }
// // console.log(e.join(" "))

// // let date = new Date()
// // let dd = date.getDate()
// // if(dd<10){
// //     dd = "0"+dd
// // }
// // let mm = date.getMonth()
// // if(mm<10){
// //     mm = "0"+mm
// // }
// // let yyyy = date.getFullYear()
// // console.log(dd+"-"+mm+"-"+yyyy)

// // let cDate = new Date()
// // let christmasDate = 25-12-2023
// // let leftDay = 0

// // var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // console.log(arr1.sort(function(a,b){
// //     return a-b
// // }))
// // console.log()

// // Initialize an object
// const employees = {
// 	boss: 'Michael',
// 	secretary: 'Pam',
// 	sales: 'Jim',
// 	accountant: 'Oscar'
// };

// // Get the keys of the object
// const keys = Object.keys(employees);

// console.log(keys);

// const values = Object.values(employees);

// console.log(values);

// const entries = Object.entries(employees);
// console.log(entries)
// entries.forEach((value)=>{
//     console.log(value)
// })

// console.log(gerge)

// foo()
// function foo(){
//   console.log("Hello")
// }

// console.log(foo1)
// var foo1 = function(){
//   console.log("foo1")
// }

// console.log([] === ![]);
// console.log(null === undefined);
// let a= 0.2
// let b = 0.3
// let sum = a+b
// console.log(sum)
// console.log(0.1+0.2)

// let a = 0.1;
// let b = 0.2;

// let c = 0.3;

// if (a + b === c)
// {
//     console.log("a + b is equal to c");
// }
// else{
//   console.log("Error")
// }

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');

// var test = {
//   name : "John"
// }
// arr2.push(arr3);
// // console.log(`arr1 = ${arr1}`)
// // console.log("srr1 ="+arr1)
// console.log(arr1)
// // console.log("Object"+test)
// // console.log("obj ="+test)
// console.log(arr2)
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;
// console.log(a)

// console.log(a[b]);

// var hero = {
//   _name: 'John Doe',
//   getSecretIdentity: function (){
//       return this._name;
//   }
// };

// var stoleSecretIdentity = hero.getSecretIdentity();

// console.log(stoleSecretIdentity);
// console.log(hero.getSecretIdentity());

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// let a = [1,2,3]
// a[10] = 10
// console.log(a)

// console.log(typeof(undefined) == typeof(null))
// console.log(typeof(typeof(1)))

// var string = "Welcome to this Javascript Guide!";
// var arr = string.split("")
// console.log(arr)
// let revArr = arr.reverse()
// console.log(revArr)
// console.log(revArr.join(""))
// //!ediuG tpircsavaJ siht ot emocleW

// function modifyArray(arr, callback) {
//   // do something to arr here
//   arr.push(100);
//   // then execute the callback function that was passed
//   callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function() {
//   console.log("array has been modified", arr);
// });

// let first = "abcd" , second = "badc"
// compare(first,second)
// function compare(fi,sec){
//   let a = fi.toLowerCase().split("").sort().join("")
//   let b = sec.toLowerCase().split("").sort().join("")
//   console.log(a)
//   console.log(b)
//   console.log(a === b)
// }

// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// (function () {
//   var a = (b = 5);
// })();

// console.log(b);


// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

// function foo() {
//   let a = b = 0;
//   a++;
//   return a;
// }

// console.log(foo());
// console.log(typeof a); // => ???
// console.log(typeof b); // => 

// let arr = [1,2]
// arr.length = 0
// console.log(arr[0])

var i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}