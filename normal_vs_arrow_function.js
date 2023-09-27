// function abc(){
//    console.log(arguments)
// }
// // abc=(a)=>{
// //     console.log(arguments)
// // }
// abc(5 , 10 , "Hello")
// abc(5)

// const obj = {
//    name: 'deeecode',
//    age: 200,
//    print: function (){
//        print2=()=>{
//          console.log(this)
//       }
//       print2()
//    }
//  }
 
//  obj.print()


class Animal{
   constructor(name,age){
      this.name =name
      this.age= age
   }
   sayName=()=>{
      console.log(`${this.name} is my name and age is ${this.age}`)
   }
}
let raghu = new Animal("Raghu",4)
let bavo = new Animal("Bavchand",5)
raghu.sayName()
bavo.sayName()
