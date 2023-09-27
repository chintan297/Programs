
// class CoffeeMachine {
//     // ...
  
//     constructor(power) {
//       this._power = power;
//     }
  
//     get power() {
//       return this._power;
//     }
//     set power(power){
//      return this._power = power
//     }
  
//   }
  
//   // create the coffee machine
//   let coffeeMachine = new CoffeeMachine(100);
  
//   console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
  
//   coffeeMachine.power = 25; // Error (no setter)\
//   console.log(coffeeMachine.power)
//   console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

//   class CoffeeMachine {
//     _waterAmount = 0;
  
//     setWaterAmount(value) {
//       if (value < 0) value = 0;
//       this._waterAmount = value;
//     }
  
//     getWaterAmount() {
//       return this._waterAmount;
//     }
//   }
  
// let coffeeMachine  = new CoffeeMachine()
//   coffeeMachine.setWaterAmount(245)
//   console.log(coffeeMachine.getWaterAmount(100))

class Student{
      constructor(name,marks){
        this.name = name
        this.marks = marks
      }
     getName(){
        return this.name
    }
     setName(name){
        this.name = name
    }
     getMarks(){
        return this.marks

    }
     setMarks(marks){
        if(marks < 0 || marks > 100){
            console.log("Invalid marks")
        }
        else
            this.marks = marks
    }

}
let s = new Student()
s.setName("John")
s.setMarks(10)
console.log(s.getName() +" " + s.getMarks())
console.log(s.marks)
