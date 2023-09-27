//1 indexOf()
let a = "Returns OF the index of first word Of a string"
let b = a.indexOf("the");
console.log(b)

//2 lastIndexOf()
let c = a.lastIndexOf("of")
console.log(c)

//3 search()
let d = a.search("of")
console.log(d)

//4 match()
const e = a.match(/of/gi)
console.log(e) // return an array

//5 matchALL()
let f = a.matchAll(/of/gi)
const g = Array.from(f)
console.log(g)

//6 include()
let h = a.includes("index")
console.log(h)

//7 startwith()
let i = a.startsWith("OF")
console.log(i)

//8 endsWith()
let j = a.endsWith("ing")
console.log(j)


//Template Literals
let k = "Hello";
let l = "How are you";
let m = k+l
console.log("Welcome"+m)
let n = `Welcome ${k}, ${l}`
console.log(n)