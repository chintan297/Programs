// let nameObj = {
//     name : "John"
// }
// let printName = {
//     name : "Smith",
//     sayHi : function(age,year){
//         console.log(`${this.name}'s age is ${age} in this year ${year}`)
//     }
// }
// printName.sayHi.call(nameObj,43,2023)

// function Car(type, fuleType){
//     this.type = type
//     this.fuleType = fuleType
    
// }
// function setBrand(brand){
//     Car.call(this,"Convertable","petrol")       // call method
//     this.brand = brand
//     console.log("Car details ",this)
// }
// function definePrice(price){
//     Car.apply(this,["covertable","disel"])         // apply method
//     this.price = price
//     console.lo
// }

// const newBrand = new setBrand("Brand1")
// const carPrice = new definePrice(500000)


const car = {
    name : "Volvo",
    type : "Convertible",
    fule_Type : "diesel",
    detailsCar : function(){
        return this.name + " " + this.type + " " + this.fuleType 
    }
}
const member = {
    name : "Tata",
    fuleType : "Petrol",
    type : "nonConvertible",
    model : "Harrier"
}
console.log(car.detailsCar())
let tata = car.detailsCar.bind(member)  
console.log(tata)
