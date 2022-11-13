//   - Map
//   --- method creates a new array
//   --- populated with the results of calling a provided function on every element
//   --- in the calling array.

//   Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
//   - Element => The current element being processed in the array.
//   - Index => The index of the current element being processed in the array.
//   - Array => The Current Array




// Syntax map(callBackFunction(Element[required], Index[opt], Array[opt]) { }, thisArg)

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
// //   console.log(`Current Element => ${element}`);
// //   console.log(`Current Index => ${index}`);
// //   console.log(`Array => ${arr}`);
//   return element + element;
// });

// console.log(addSelf);


//---------------------------------------
// let x = "groub2"

// console.log(x)
// console.log(x.split(""))

//---------------------------------------------



/*
  Map
  - Swap Cases
*/

// let swappingCases = "GrouB";

// let sw = swappingCases.split("").map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   }).join(",");
//   console.log(sw);


//---------------------------------------------