//Date- 6-01-2026
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS
//     4. find() the course "react"
//     5. findIndex() of "node"

const courses = ["javascript", "react", "node", "mongodb", "express"];

let result1=courses.filter(element=>element.length>5);
console.log(result1);

let result2=courses.map(ele=>ele.toUpperCase());
console.log(result2);

let result3=courses.reduce((acc,ele)=>acc+ele)
console.log(result3)

let result4=courses.find(ele=>ele=='react')
console.log(result4)

let result5=courses.findIndex(ele=>ele=='node')
console.log(result5)