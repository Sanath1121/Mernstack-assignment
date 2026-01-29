// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

const currentDate = new Date();
const year=currentDate.getFullYear();
const month=currentDate.getMonth()+1;
const date=currentDate.getDate();
const dayOfWeek=currentDate.getDay();
const hours=currentDate.getHours();
const minutes=currentDate.getMinutes();
const seconds=currentDate.getSeconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Date: ${date}`);
console.log(`Day of Week: ${dayOfWeek}`);
console.log(`Time: ${hours}:${minutes}:${seconds}`);
console.log(`Date and time : ${date}-${month}-${year} ${hours}:${minutes}:${seconds}`);
    
