const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
// for (let i = 0; i < items.length; i++) {
//  document.write(copyItems.push(items[i])) ;
// }

//after
// items.forEach((item) => {
//  document.write(copyItems.push(item)); 
// });

// ---------------------------------------------before

// let arr =['sara','jack','mera'];

// for (let i = 0; i < arr.length; i++)
// console.log('Hello '  + arr +  ' How are you?')
// ---------------------------------------------after

// let arr =['sara','jack','mera'];
// arr.forEach(item);

// function item(){
//     console.log('Hello '  + arr +  ' How are you?') 
// }
// ------------------------------------------------
// let arr =['sara','jack','mera'];
// arr.forEach((item) =>{
//   console.log('Hello '  + arr +  ' How are you?') 
// });

