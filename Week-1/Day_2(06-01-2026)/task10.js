// Created: 06-Jan-26 02:17:46 PM
// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temp = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

let result1=temp.filter(element=>element>35);
console.log('Temperatures greater than 35 are:',result1);

let result2=temp.map(element=>element*9/5+32);
console.log('Celsius to Fahrenheit:',result2);

let avg=temp.reduce((acc,ele)=>acc+ele,0)
avg=avg/temp.length;
console.log('The average temperature of the given array of temperatures is:',avg);

let result3=temp.find((element=>element>40));
console.log('The first element greater than 40 is:',result3)

let result4=temp.findIndex(element=>element==28);
console.log('The index in the array with temperature 28 is:',result4)