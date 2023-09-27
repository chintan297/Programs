// string to number
// number to string
// dates to numbner
// number to dates
// boolean to number
// number to boolean


// string to numbers

let a = "65.08978"
console.log(a,typeof(a))
let b = Number(a)
console.log(b, typeof(b))
// console.log(Math.PI,typeof(Math.PI))
console.log(Number(a), parseInt(a),parseFloat(a))
console.log("\n")


// The Unary + operator

let y = "5"
let x ;
x = + y
console.log(x)
console.log("\n")


// numbers to string

let c = 5667
console.log(c, typeof(c))
console.log(String(c), typeof(String(c)))
console.log("\n")


// Dates to Numbers 

let d = new Date()
console.log(d , typeof(d))
console.log(typeof(Number(d))) 
console.log(typeof(d.getTime()))
console.log("\n")


// Dates to String

console.log(String(Date()))
console.log(typeof(String(Date())))
console.log(Date().toString())
console.log("\n")


// Booleans to number

console.log(Number(true))
console.log(Number(false))
console.log("\n")


//Boopleans to String

console.log(String(true))
console.log(typeof(String(true)))
console.log(String(false))
console.log(typeof(String(false)))
console.log("Using toString")
console.log(true.toString())
console.log(typeof(true.toString()))
console.log(false.toString())
console.log(typeof(false.toString()))
console.log("\n")

// Autometic Type Conversion

let e = "5"
let f =  3 * e
console.log(e) 
console.log(typeof(e))
console.log(f)
console.log(typeof(f))
console.log("\n")


// Autometic String Conversation

let g = {
    name : "John"
}
console.log(g)
console.log(typeof(g))
console.log("---------")
console.log(g.toString())
console.log(typeof(g.toString()))
console.log("\n")

let h = [1,2,3,4,5]
console.log(h.toString())
console.log(typeof(h.toString()))
