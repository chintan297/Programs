arr = [
  { name: "kagado", type: "bird" },
  { suname: "pareva" },
  "",
  [[],[],555],
  [[],566, "Hello"],
  [{ company: "fagliune" }],
  { key: [1] },
  {},
  0,
  7,
  null,
  undefined,
  ,
  "chintan",
];

// ["chintan", 0, 7, { name: "kagado", type: "bird" }, { suname: "pareva" }];




// USINF FILTER METHOD AND RETURN VALUE
  
let newArr = arr.filter(function abc(el) {
  if (typeof el == "number") {
    return true;
  }
  if (el) {
    if (typeof el == "string") {
      return el;
    } else if (typeof el == "object") {
      if (Object.keys(el).length > 0) {
        if (Array.isArray(el)) {
          return el
        } else {
          return el;
        }
      }
    }
  }
});
console.log(newArr);



// using push method

// let newArr =[]
//  arr.forEach(function abc(el) {
//   if (typeof el == "number") {
//     newArr.push(el)
//   }
//   if (el) {
//     if (typeof el == "string") {
//       newArr.push(el)
//     } else if (typeof el == "object") {
//       if (Object.keys(el).length > 0) {
//         if (Array.isArray(el)) {
//           let newArray = el.flat(5)
//           newArr.push(newArray)
//         } else {
//           newArr.push(el)
//         }
//       }
//     }
//   }
// });
// console.log(newArr);
