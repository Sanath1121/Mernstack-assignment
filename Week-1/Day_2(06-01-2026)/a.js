// Created: 06-Jan-26 09:45:28 AM
// Program to demonstrate object creation, manipulation, freezing, and property access
let emp={
    'eno':1, 'name':'Sun'
}
console.log(emp.eno);
emp.city='Hyd';
console.log(emp);
emp.eno=123;
console.log(emp);
delete emp.name;
console.log(emp)
Object.freeze(emp);
emp.city='Delhi';
console.log(emp);
console.log(Object.keys(emp));
console.log(Object.values(emp));
