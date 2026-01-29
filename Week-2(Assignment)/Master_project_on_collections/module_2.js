import {users, courses, cart, roles} from './data.js';
// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
function publishedCourses()
{
    return courses.filter(course=>course.published==true);
}
//   -> Sort courses by price (high → low)
function coursesHtoL()
{
    let sortedCourses=[...courses].sort((a,b)=>b.price - a.price);
    return sortedCourses;
}
//   -> Extract { title, price } only
function extractCourse()
{
    return courses.map(course=>({
        title:course.title,
        price:course.price
    }));
}
//   -> Calculate total value of published courses
function totalValueOfPublished()
{
    return courses.filter(course=>course.published==true).reduce((acc,course)=>acc+=course.price,0);
}
//   -> Add a new course immutably
function addCourse(id,title,price,published)
{
    let newCourses=[...courses];
    newCourses.push({
        id:id,title:title,price:price,published:published
    })
    return newCourses;
}



