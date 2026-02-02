// Created: 06-Jan-26 11:41:57 AM
// Program to filter marks within a specific range (30-70) using the filter function
let marks=[98,78,48,89,56];

//write a function to extract marks greater than 70 and pack them into an array and return the array

// let result=marks.filter(function(element){
//     return element>70;
// })
// console.log(result)


// let a=[]
// for(let i of marks)
// {
//     if(i>70)
//     a.push(i)
// }
// console.log(a)


// let result=marks.filter(element=>element>70)
// console.log(result)



// marks between 30 and 90 using filter()

let result=marks.filter(element=>element>=30 && element<=70)
console.log(result)