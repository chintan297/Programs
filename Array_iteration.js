// // forEach()

//         function forEachBhai(){
//             const items = [12,24,36];
//             const aava_de = []
//             items.forEach((item)=>{      // Not return any value
//                 console.log(item);       // array to value
//                 aava_de.push(item *  2)  // Each item to plus 2
//             })
//             console.log(aava_de)
//         }
//         forEachBhai()

// //map()

//         function rasto(){
//             const n1 = [32,3,23,6]
//             const n2 = n1.map((n)=>{
//                 console.log(n*2)       
//                 return n*2             //  return a value
//             })
//             console.log(n2)
//         }
//         rasto()


// //flatMap()

// function flatRasto(){
//     const a1 = [32,3,23,6]
//     const a2 = a1.flatMap((a)=>{
//         console.log(a*2)
//         return a*2
        
//     })
//     console.log(a2)
// }
// flatRasto()


// // filter()

// function filterKaka(){
//     let f1 = ["hello", "how are you?", "hey", "hlw"];
//     let g = f1.filter((f)=>{
//         let h = f.length
//         return h > 4             // if test pass that value return
//     })
//     console.log(g)
// }
// filterKaka()


// // reduce()

// function reduceDada(){

//     let x = [10,20,30,40]
//     let y = x.reduce((a,b)=>{
//         return a + b
//     },1)                        
//     console.log(y)
// }
// reduceDada()


// // spread operator

const a = ["gger","wer","ewfr"];
const b = [...a];
console.log(a);
console.log(b);


// let arr = [3,4,5,6,2,34,5,44]

// let red = arr.reduce((a,c,arr1)=>{
//     return arr1.filter(function(a,c){
//         return a < c
//     })
    
// })
// console.log(red)