// arr = [
//     { name: "kagado", type: "bird" },
//     { suname: "pareva" },
//     "",
//     [],
//     [[], [566], "Hello"],
//     [{ company: "fagliune" }],
//     { key: [1] },
//     {},
//     0,
//     7,
//     null,
//     undefined,
//     ,
//     "chintan",
//   ];
  
//   const notEmptyArrayOrObject = (arr)=> {

//     if(typeof arr !== 'object'){ return true }
  
//     if(!Array.isArray(arr){
//        arr = Object.values(arr)
//     }
  
//     return arr.filter(item=>item === undefined).length !== arr.length
//   }
  
//   const filterEmptyFromArray = (array)=>array.filter(notEmptyArrayOrObject)

let test1 = [[1.39080000912E11,undefined, 'RSSMA004025', 'uiuiu M4X25', 4.0, 4.2, , , ],[1.39080000912E11, 'RWJAA058068;', 'FTB - 268', 1.0, 486.0, 486.0, , ],[[],"Hello",[555]],[, , , , , , , ]]


const arrFiltered = test1.filter(function(x) {
  return (x.join('').length !== 0);
});

console.log('new array',arrFiltered);6