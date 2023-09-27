// using all types of search method and replace method

let a = "Using String search() With a string "
let b = a.search(/string/gi)
console.log(b)


let c = a.replace(/string/i,"Strict")
console.log(c)

// Regular Expression Patterns

let d = a.match(/[s]/ig)    //	Find any of the characters between the brackets
console.log(d)

let e = "1,2,3,4,jut,5.88"
let f = e.match(/[3-9]/g)
console.log(f)

