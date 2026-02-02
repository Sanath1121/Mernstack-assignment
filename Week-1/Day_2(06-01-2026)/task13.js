// date: 06-01-2026
// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.
// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
// Test data:
const marks = [78, 92, 35, 88, 40, 67];

let result1=marks.filter(ele=>ele>=40);
console.log(result1)

let result2=marks.map(ele=>ele+=4)
console.log(result2)

let result3=marks.reduce((acc,ele)=>ele>acc?ele:acc,0)
console.log(result3)

let result4=marks.find(ele=>ele<40);
console.log(result4);

let result5=marks.findIndex(ele=>ele==92)
console.log(result5)

