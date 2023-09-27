// class Animal{
//     static plannet = "Earth"

//     constructor(name,speed){
//         this.name= name
//         this.speed = speed
//     }
//     run(speed = 0){
//         this.speed = this.speed + speed
//         console.log(`${this.name} run with speed ${this.speed}`)
//     }
//     static compare(animalA, animalB){
//         return animalA.speed - animalB.speed
//     }
// }
// class Rabbit extends Animal{
//         hide(){
//             console.log(`${this.name} is hide`)
//     }
// }

// let rabbits = [
//     new Rabbit("White Rabbit",19),
//     new Rabbit("Black Rabbit",5)
// ];
// let a = rabbits.sort(Rabbit.compare)
// a[1].run()

//   console.log(Rabbit.plannet)


class Animal{
    static plannet = "Earth"

    constructor(name,speed){
        this.name= name
        this.speed = speed
    }
    run(speed = 0){
        this.speed = this.speed + speed
        console.log(`${this.name} run with speed ${this.speed}`)
    }
    static compare(x){
        return (console.log(x.name))
    }
}

let a = new Animal("Rabbit")
Animal.compare(a)