const fruits = new Map([
    ["Mango",200],
    ["Apple", 400],
    ["Kiwi", 500],
    ["Mangos",200]
])
fruits.set("new",800)
console.log(fruits.get("new"))

fruits.delete("Apple")
console.log(fruits)

console.log(fruits.has("Apple"))

const newFruit = fruits.forEach((value,key)=>{
    console.log(key + " = " + value)
})

let navaBhai = "";
for (const f of fruits) {
    navaBhai += f + "\n"
}
console.log(navaBhai)