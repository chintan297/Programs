let text = "Hello hOw are you"
// console.log(text.slice(6,-2))
// console.log(text.split(" "))
// console.log(text.substring(-1,-4))

//at()
// console.log(text.at(4))
// console.log(text.charAt(4))
// console.log(text.charCodeAt(4))
// console.log(text.codePointAt(4))
// const text2 = "Hello how are you"
// console.log(text.concat(text2))
// console.log(text.endsWith("are you"))
// console.log(text.includes("how"))
// console.log(text.indexOf("o"))
// console.log(text.lastIndexOf("o"))
// console.log(text.length)
// console.log(text.localeCompare(text2))
let aa = text.match("o") 
console.log(aa)

for(let a of aa){
    console.log(a)
}



// const text = "GFEDCBA"
// // console.log(text.substring(-2, -3))
// let a = text.split("")
// console.log(a)
// let b = a.sort()
// console.log("b is",b)
// console.log(typeof(b.join("")))

// const text = 'the quick brown fox'
// console.log(text)
// let arrayN = text.split(" ")
// let emptyArray = []
// arrayN.forEach((a)=>{
//     let b = a.charAt(0).toUpperCase()+ a.slice(1)
//     emptyArray.push(b)
// })
// let c = emptyArray.join(" ")
// console.log(c)

// const a = "Web Development Tutorial";
// let convertArray = a.split(" ");
// // console.log(convertArray)
// // console.log(convertArray.length)
// var maxLength = 0;
// let maxWord = "";
// for (let i = 0; i < convertArray.length; i++) {
//   if (convertArray[i].length > maxLength) {
//     maxLength = convertArray[i].length;
//     maxWord = convertArray[i];
//   }
// }
// console.log(maxWord);


// let text = "This a progeram of searching vowels"
// let convertArray = text.split("")
// console.log(convertArray)
// let vowels = []
// let searchVowel = convertArray.map((a)=>{
//     if(a=== "a" || a=== "e"||a=== "i"||a=== "o"||a=== "u"||a=== "y"||a=== "A" || a=== "E"||a=== "I"||a=== "O"||a=== "U"||a=== "Y"){
//         vowels.push(a)
//     }
// })
// console.log(vowels.length)


let isPrime = true
function primeNumber(n){
    if(n===1){
        console.log("1 is not prime")
    }
    else if(1 < n){
        for(i = 2 ; i < n ; i++){
            if(n % i == 0){
                isPrime = false
                break
            }
        }
        if(isPrime){
            console.log(`${n} is a prime Number`)
        }
        else{
            console.log(`${n} is not prime number`)
        }
       
       
    }
    
    
}
// primeNumber(7)

