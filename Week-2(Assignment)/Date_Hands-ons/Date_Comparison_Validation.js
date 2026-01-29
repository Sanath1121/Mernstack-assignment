// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid

let enrollmentDeadline = new Date("2026-05-20");
let today = new Date();
if(today<enrollmentDeadline)
    console.log("Enrollment Open");
else
    console.log("Enrolment Closed");

function isValidDate(dateString){
    let dates=dateString.split("-");
    let year=parseInt(dates[0]);
    let month=parseInt(dates[1]);
    let day=parseInt(dates[2]);
    let date=new Date(year,month-1,day);
    return (
        date.getDate()===day &&
        date.getMonth()+1===month &&
        date.getFullYear()===year ? date : "Invalid Date"
    );
}

let userInput="2026-01-27";
let dateObj=isValidDate(userInput);
console.log(dateObj);
