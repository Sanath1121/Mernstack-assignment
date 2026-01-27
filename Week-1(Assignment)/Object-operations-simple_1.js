// Created: 06-Jan-26 09:50:46 AM
// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields
// Let user={
//     'name':Bharadwaj,
//     'email':'Bwaj@gmail.com',
//     'role':'Student',
//     'isActive':false
// }



const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
console.log('Username:',user['name'],'\nEmail:',user['email'])
user.lastLogin='206-01-01';
user.role='admin';
delete user.isActive;
console.log(user)
console.log(Object.keys(user));
console.log(Object.values(user));