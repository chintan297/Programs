var user = {
    name : "John",
    address : {
        // street : "CG Road"
    }
}
// // console.log(user.address? user.address.street: undefined)
// console.log(user.address?.street)
console.log(user.address.street)


// var user1 = {
//     name : "John",
//     address : {
//         // street : "CG Road"
//     }
// }



// let user = {
//     name : "John",
//     display : function(){
//       let address = "dubai"
//     //   console.log(address)
//     }
//   }
//   console.log(user.display?.())
//   // let user1 = {
//   //   name : "John"
//   // }
  

let a = 656
let b = "john"
let res = a ?? b
console.log(res)