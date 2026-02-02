// Created: 06-Jan-26 10:58:46 AM
// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90
const marks={
    maths:78,
    physics:65,
    chemistry:82,
    english:55
};

let total=0
let avg=0;
let max=0;
let ind = 0;
let x=0;
for(i of Object.values(marks))
{
    total+=i;
    x+=1;
    if(i>max)
        max=i;
        ind =x;
}
avg=total/Object.values(marks).length;
console.log('Total marks',total)
console.log('Average marks',avg)
console.log('Maximum marks',max)

marks.computer=90;
console.log(marks);