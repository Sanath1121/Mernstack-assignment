// Created: 06-Jan-26 11:06:58 AM
// //Callback function is a function that can be passed or sent as an argument to another function
// function test(a){
//     console.log(a);
// }

// test(function(){
//     return 123;
// })

// ========== ARRAY OPERATIONS ==========
// Program to demonstrate array manipulation methods (push, pop, shift, unshift, splice, destructuring)

let skills=['html','css','javascript'];

// Array Destructuring: Extract individual elements from array into separate variables
let [skills1,skills2,skills3]=skills;
console.log(skills2)

// unshift(): Add element at the beginning of the array
skills.unshift('bootstrap');
console.log(skills);

// push(): Add element at the end of the array
skills.push('c')
console.log(skills)

// splice(index, deleteCount, insertElements): Insert element at specific position
// Insert 'c++' at index 1, delete 0 elements
skills.splice(1,0,'c++')
console.log(skills)

// shift(): Remove first element from the array
skills.shift()
console.log(skills)

// pop(): Remove last element from the array
skills.pop()
console.log(skills)

// splice(index, deleteCount): Remove element at specific position
// Remove 1 element at index 2
skills.splice(2,1)
console.log(skills)