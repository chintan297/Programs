// // // var fruits = ["Banana","Orange","Apple","Mango"]
// // // let numbers = [1,2,3,4,5]
// // // //at()
// // // // console.log(fruits.at(2))
// // // // console.log(fruits[2])

// // // // //concat()
// // // // const num = [1,3,[5,7]]
// // // // console.log(fruits.concat(num))
// // // // const num2 = [[2,4],4,7]
// // // // console.log(num.concat(num2))

// // // //entries()
// // // // let entriesA = fruits.entries()
// // // // for ( let i of entriesA) {
// // // //     console.log(i)
// // // // }

// // // //every()
// // // // let numbers =[3,214,345,23,5,2,21,35]
// // // // console.log(numbers.every((n)=>{
// // // //     return n > 2
// // // // }))

// // // //fill()
// // // // console.log(fruits.fill("Kiwi"))     // it is chagne in orignal array

// // // // filter()
// // // // console.log(fruits.filter((f)=>{
// // // //     return f.length > 5
// // // // }))

// // // //find()
// // // // console.log(numbers.find((n)=>{
// // // //     return n > (2+2)
// // // // }))

// // // //findIndex()
// // // // console.log(numbers.findIndex((e)=>{
// // // //     return e >5
// // // // }))

// // // //flat()
// // // // let num = [4,2,[5,3],6,[35,24]]
// // // // console.log(num.flat())

// // // // // flatmap
// // // // console.log(numbers.flatMap((e)=>{
// // // //     return [e*2]
// // // // }))

// // // // forEach()
// // // let n = numbers.forEach((n)=>{
// // //     console.log(n * 2)
// // // })

// // // //from()
// // // // console.log(Array.from("55"))

// // // //includes()
// // // // console.log(fruits.includes("Mango",3))

// // // // // indexOf()
// // // // console.log(fruits.indexOf("mango"))

// // // //join()
// // // // let joinA = fruits.join(" and ")
// // // // console.log(typeof(joinA))

// // // //keys()
// // // // let k = fruits.keys()
// // // // console.log(k)
// // // // for (const i of k) {
// // // //     console.log(i)
// // // // }

// // // //lastIndexOf()
// // // // console.log(fruits.lastIndexOf("Apple"))

// // // //length()
// // // // console.log(fruits.length)

// // // // map()

// // // // let num = numbers.map((n)=>{

// // // //     return n * 10
// // // // })
// // // // console.log(typeof(num))
// // // // console.log(num)

// // // //reduce() or reduceRight()
// // // let reduceDada = numbers.reduceRight((x,y)=>{
// // //     return x +y
// // // },10)
// // // console.log(reduceDada)
// // // console.log(typeof(reduceDada))

// // // // //reverce()
// // // // let reverceA = numbers.sort(function(a,b){
// // // //     return a-b
// // // // })
// // // // console.log(reverceA.reverse())

// // // // slice()
// // // // let sliceA = fruits.slice(1,3)
// // // // console.log(sliceA)

// // // //splice()
// // // // var fruits = ["Banana","Orange","Apple","Mango"]
// // // // fruits.splice(1,0,"Kiwi","Lemon")
// // // // console.log(fruits)
// // // // var veg = fruits.valueOf()
// // // // console.log(veg)

// // // // 3 nested arrays
// // // // let numbers = [1, 2, [3, 4, [5, 6, [7, 8,[9, 10]]]]];

// // // // // reducing nesting by flattening the array to depth 2
// // // // let flattenArray = numbers.flat(2);

// // // // new flatten array
// // // // console.log(flattenArray);

// // // // Output:
// // // // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

// // // let ans = arr.forEach(abc);
// // // function abc(aa) {
// // //   if (aa) {
// // //     if (typeof aa == "object") {
// // //       if (Object.keys(aa).length > 0) {
// // //         if (Array.isArray(aa)) {
// // //           let nArr = abc(aa)
// // //           newArr.push(nArr)
// // //         }
// // //       }
// // //     } else {
// // //       newArr.push(aa);
// // //     }
// // //   }
// // // }
// // // function bcd(a) {}
// // // console.log(newArr);

// // let arr = [
// //   {
// //     name: "John",
// //     sname: "Smith",
  
// //   },
// //   null,
// //   undefined,
// //   "Hello",
// //   3445,
// //   {
   
// //   },
// //   [],
// //   [[[],10],[]],
// //   [1, 2, 3, 4,[]],
// // ];

// // let newArr = [];


// // function handleArray(arr) {

// //   arr.forEach(function abc(cur) {
// //     if (cur === null || cur === undefined) {
// //       return;
// //     }

// //     else if (Array.isArray(cur)) {
      
// //       let neArr = handleArray(cur)
    
// //       if(neArr){
// //         if (neArr.length > 0) {
// //           newArr.push(neArr);
// //           return
// //         }
// //       }    
        
// //     }

// //     else if (typeof cur == "object") {
// //         if (Object.values(cur).length > 0) {
// //           newArr.push(cur);
// //         }
// //     }

// //     else if (typeof cur == "string") {
// //       newArr.push(cur);
     
// //     }

// //     else if (typeof cur == "number") {
// //       newArr.push(cur);
// //     }
// //   });
// // }
// // handleArray(arr);
// // newArr.forEach(function (a) {
// //   console.log(a);
// // });
// // // // console.log(newArr)


// // const arr = [2, 7, 9, 15, 19];
// // delete arr[3];
// // console.log(arr);

// // 
// // const MAX_PRIME = 1000000;
// // const random = (max) => Math.floor(Math.random() * max);
// // const candidate = random(MAX_PRIME);
// // console.log(candidate)
// // function doStep1(init) {
// //   return init + 1;
// // }

// // function doStep2(init) {
// //   return init + 2;
// // }

// // function doStep3(init) {
// //   return init + 3;
// // }

// // function doOperation() {
// //   let result = 0;
// //   result = doStep1(result);
// //   result = doStep2(result);
// //   result = doStep3(result);
// //   console.log(`result: ${result}`);
// // }

// // doOperation();
// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();


// let obj=[
//   {name:'john',lname:'doe',address:'Alaska'},
//   {name:'tom',lname:'hopes',address:'California'},
//   {name:'harry',address:'Texas'}
//   ]

//   obj.sort(function (a, b) {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
  
//   console.log(obj);
//  console.log(sortFname)


