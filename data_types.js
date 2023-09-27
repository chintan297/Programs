let a = "This is String"
a ="this is a string"
// console.log(a)
// console.log(a[0] = "T")    
// console.log(a)
// console.log(a.charAt(a.length-1))


let c = "5"
let d = 5
// console.log(c == d)
// console.log(c === d)


let user  ={
    name : "John"
}
let user1 = {
    name : "John"
}
let user2 = user
user2.age = 19
// console.log(user)
// console.log(user1)
// console.log(user === user1)
// console.log(user.name == user1.name)
// console.log(user2)
// console.log(user2.age = 20)
// console.log(user)
// console.log(user1)
// console.log(user2)
// console.log(user == user2)
Object.defineProperty(user,"age",{
    value : "20"
})
// console.log(user)
user.address = "London"
// console.log(user)
user['street'] = "CG Road"
// console.log(user)
const em = {
    nationality : "Indian"
}
console.log(Object.assign(user,em))
console.log(user)


let emp = ["John","Smith"]
let emp1 = ["John","Smith"]
// console.log(emp[0] == emp1[0])
// console.log(typeof(undefined))

let e = "Hello"
let f = e
e = "Fine"
// console.log(e)
// console.log(f)