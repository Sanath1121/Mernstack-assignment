import {users, courses, cart, roles} from './data.js';
// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
function activeUsers()
{
    return users.filter(user=>user.active==true);
}
//   -> Extract names of active users
function activeUserNames()
{
    return users.filter(user=>user.active==true).map(user=>user.name);
}
//   -> Check if any admin exists
function adminsExists()
{
    if(users.filter(user=>user.role=="admin"))
        return true;
    else 
        return false;

}
//   -> Find user by id
function findUserById(userId)
{
    return users.find(user=>user.id==userId);
}
//   -> Deactivate a user immutably
function deactivateUser(userId)
{
    let newUsers=users;
    if(newUsers.find(user=>user.id==userId)){
        newUsers.find(user=>user.id==userId).map(user=>user.active=false);
        return 'Deactivated';
    }
    else
        return 'User not found';

}

