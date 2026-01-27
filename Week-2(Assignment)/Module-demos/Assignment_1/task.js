import {validateDueDate,validateTitle,validatePriority} from './validator.js';

const tasks=[];
// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    // If valid, add to tasks array
    // Return success/error message
    if(validateTitle(title)&&validatePriority(priority)&&validateDueDate(dueDate)) {
    tasks.push({taskID:tasks.length+1,title:title,priority:priority,dueDate:dueDate,isCompleted:false});
    return "Task added successfully";
    }
    else
        return "Invalid Task";
}
                    
 // 2. Get all tasks
function getAllTasks() {
    return tasks;
// Return all tasks
}

// 3. Mark task as complete
function completeTask(taskId) {
    tasks[taskId-1].isCompleted=true;
// Find task and mark as complete
}
// Export functions
export{addTask,getAllTasks,completeTask};
