import {users, courses, cart, roles} from './data.js';
// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
function allRoles()
{
    return roles;
}
//   -> Check if student can delete
function studentDeletePermission()
{
    if (roles.student.includes("delete"))
        return true;
    else
        return false;
}
//   -> Create a flat list of all unique permissions
function allPermissions()
{
    const allPermissions=Object.values(roles);
    allPermissions=allPermissions.flat();
    allPermissions=[... new Set(allPermissions)];
    return allPermissions;
}
//   -> Add new role moderator immutably
function addRole(roleName)
{
const newRoles={ ...roles,
    [roleName]:["view","update"]
}
return newRoles;
}
