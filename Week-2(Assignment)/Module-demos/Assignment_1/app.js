import {addTask,getAllTasks,completeTask} from './task.js';

console.log(addTask("Task 1","high","2026-12-31"));
console.log(addTask("Task 2","medium","2027-01-01"));
console.log(addTask("Task 3","low","2026-05-20"));   

console.log("All Tasks:",getAllTasks());

completeTask(2);

console.log(getAllTasks());






