// ------- Block Scope --------

// {
//     var a = 6       // a can be used outside of block
// }
// console.log(a)

// {
//     let b = 5       // b can not be used outside of block 
// }
// console.log(b)



// ------- Local Scope --------

// console.log(carName)         // code here can NOT use carName
// function myFunction() {
//     var carName = "Volvo";
//     console.log(carName)         // code here CAN use carName
//   }
//   myFunction()
//   console.log(carName)        // code here can NOT use carName



// ------- Function Scope --------

// var , let and const have function scope



// ------- Global Scope --------

var a = 10        // global Variable
let b = 5         //     "
const c = 15      //     "

function abc(){
  console.log(a,b,c)
  let d = 20
  if(d=20){
    var e = 30
  }
 

}
abc()
console.log(e)