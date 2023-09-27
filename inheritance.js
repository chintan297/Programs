// // extand keyword 

// class Animal{
//     constructor(name){
//         this.name = name
       
//     }
//     run(speed){
//         this.speed = speed
//         return (`${this.name}\'s speed is "${this.speed}"`)
//     }
//     stop(){
//         return(`${this.name} is stopped`)
//     }

// }
// class Rabbit extends Animal{
   
//     hide(){
//         return (`${this.name} is hide`)
//     }
//     stop(){
//         super.stop();
//         this.hide();
//     }
// }
// let a = new Animal("My Animal")
// console.log(a.run(0))
// console.log(a.stop())
// let r = new Rabbit("Rabbit")
// console.log(r.run(5))
// console.log(r.stop())



// // inheritance (using prototype)

// function Bike(companyName) {
//     this.companyName = companyName;
//   }
//   Bike.prototype.getCompany = function () {
//     return this.companyName;
//   };
  
//   function Vehical(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
//   let bike = new Bike("Honda");
//   Vehical.prototype = bike;
//   let vehical = new Vehical("Shine", 89000);
//   console.log(vehical.getCompany(), vehical.name, vehical.price);


class Company{
    constructor(cName,address){
        this.cName = cName
        this.address = address
    }
    displayCompany(){
        console.log(this.cName+" and "+this.address)
    }
}
class Employe extends Company{
    constructor(cName,address){
        super(cName,address)    
    }
   static display(){
        return this.name+" "
    }
}

let emp = new Employe("abc","Banglore")
console.log(Employe.display(emp))

