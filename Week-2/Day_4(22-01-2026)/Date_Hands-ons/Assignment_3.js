// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years

let dob = "2000-05-15";
let birthDOB=dob.split('-');
let birthYear=birthDOB[0];
let birthMonth=birthDOB[1];
let birthDate=birthDOB[2];
let date=new Date();
let currentYear= date.getFullYear();
let currentMonth= date.getMonth()+1;
let currentDate= date.getDate();
if(birthMonth>currentMonth && birthDate>currentDate)
    console.log(`Current age: ${currentYear-birthYear} years ${birthMonth-currentMonth} months and ${birthDate-currentDate} days`);
else if(birthMonth>currentMonth)
    console.log(`Current age: ${currentYear-birthYear} years ${birthMonth-currentMonth} months and ${currentDate-birthDate} days`);
else if(birthDate>currentDate)
    console.log(`Current age: ${currentYear-birthYear} years ${currentMonth-birthMonth} months and ${birthDate-currentDate} days`);
else
    console.log(`Current age: ${currentYear-birthYear} years ${currentMonth-birthMonth} months and ${currentDate-birthDate} days`);