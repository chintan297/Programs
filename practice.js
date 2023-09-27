//https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

//is array or not

// function is_Array(i){
//     if(Array.isArray(i)){
//         console.log(`${i} is array`)
//     }
//     else{
//         console.log(`${i} is not array`)
//     }
// }

// is_Array("Hello")
// is_Array([1,2,3])

//cloning array

// let a = [1,3,[5,7],9]
// let b = a.slice()
// console.log(a)
// console.log(b)
// console.log(JSON.stringify(a)==JSON.stringify(b))

//Join element

// let myColor = ["Red", "Green", "White", "Black"];
// let joinColor  = myColor.join("+")
// console.log(joinColor)

// add (-) sign between each even number

// function addDash(num){
//     console.log(typeof(num))
//     let numArr = num.split("")
//     console.log(numArr)
//     let newArr = []
//     for(let i=0;i<numArr.length;i++)
//     {
//         if(numArr[i] % 2 == 0 && numArr[i+1]%2 == 0){
//             newArr.push(numArr[i]+ "-")
//         }
//         else{
//             newArr.push(numArr[i])
//         }
//     }
//     console.log(newArr.join(""))
// }
// addDash("0253682")

// sorting number

// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(arr1)
// arr1.sort((a,b)=>a-b)
// console.log(arr1)

//in array mosst repeat element

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// // console.log(arr1)
// let mr = 1
// let m = 0
// let item;

// for(let i =0;i<arr1.length;i++){
//     for(let j=0;j<arr1.length;j++){
//         if(arr1[i]==arr1[j]){
//             m++
//         }
//         if(mr<m){
//             mr=m
//             item = arr1[i]
//         }
//     }
//     m=0

// }
// console.log(item +"("+mr+" times"+")")


//in array sentance every word's letter swaps

// let arr1 = "The Quick Brown Fox";
// let letter = arr1.split("");
// console.log(letter)
// let newArr = [];
// for (let i = 0; i < letter.length; i++) {
//   if (letter[i] == letter[i].toString().toUpperCase()) {
//     newArr.push(letter[i].toString().toLowerCase());
//   } else if (letter[i] == letter[i].toString().toLowerCase()) {
//     newArr.push(letter[i].toString().toUpperCase());
//   }
// }
// console.log(newArr);


//Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

// var arr1 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// // let arr2 = arr1.map((a)=>{
// //     let i = 0
// //     console.log(`Row ${i++}`)
// //     let arr3 = a.map((a)=>{
// //         console.log(a)
// //     })
// // })

// for(let i=0;i<arr1.length;i++){
//     console.log("Row "+i)
//     let innerLength = arr1[i].length
//     for(let j=0;j<innerLength;j++){
//        console.log(arr1[i][j])
//     }
// }
