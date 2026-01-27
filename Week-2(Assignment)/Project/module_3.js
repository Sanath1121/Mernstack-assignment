import {users, courses, cart, roles} from './data.js';
// MODULE 3: SHOPPING CART ENGINE 
function mergeCartCourses()
{
    const fullCart=cart.map(item=>{
        const fullCourses=courses.find(course=>course.id==item.courseId);
        return {
            ...item,
            title:course.title,
            price:course.price
        }
    })
}
//   -> Calculate total cart amount
function totalCart()
{
    const fullCart=cart.map(item=>{
        const fullCourses=courses.find(course=>course.id==item.courseId);
        return {
            ...item,
            title:course.title,
            price:course.price
        }
    })
    return fullCart.reduce((acc,item)=>acc+=(item.price*item.qty),0)
}
//   -> Increase quantity of a course (immutably)
function IncreaseQuantity(courseId,newQuantity)
{
    return cart[cart.findIndex(item=>item.courseId==courseId)].qty=newQuantity;
}
//   -> Remove a course from cart
function removeCourse(courseId)
{
    let n=cart.findIndex(item=>item.courseId==courseId);
    return cart.splice(n,1);
}
//   -> Check if all cart items are paid courses
function paidCourse()
{
    const fullCart=cart.map(item=>{
        const fullCourses=courses.find(course=>course.id==item.courseId)
        return {
            ...item,
            title:fullCourses.title,
            price:fullCourses.price
        }
    })
    return fullCart.every(course=>course.price>0);
}

