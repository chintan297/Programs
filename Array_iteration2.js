// let a1 = ["John", "Smith", "Phillips", "Warner", "Smith", "Maxwell"]
let b1 = [1,23,56,40,20,5]


// every()         every item's condtition are true then true
console.log(b1.every((b)=>{
    return b > 0
}))

// //some()            some item's ondtition are true then return true
// console.log(b1.some((b)=>{
//     return b < 0
// }))

// // indexOf()
// console.log(a1.indexOf("Warner"))

// //lastIndexOf()
// console.log(a1.lastIndexOf("Smith"))

// //find()
// let c1 = b1.sort((a,b)=>{
//     return a-b                     // first sorting an array then return value
// })
// console.log(c1)
// console.log(c1.find((c)=>{
//     return 19 < c
// }))

// //findIndex()

// console.log(c1.findIndex((c)=>{
//     return 19 < c
// }))                                 // first sorting an array then return index

// console.log(a1.keys())