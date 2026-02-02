// Created: 06-Jan-26 01:45:41 PM
// Program to demonstrate array methods (filter, map, reduce) to filter students, modify ages conditionally, and calculate total age
let students=[
    {sno:1,name:'sanath',age:20},
    {sno:2,name:'Bwaj',age:22},
    {sno:3,name:"Jessi",age:25},
    {sno:4,name:"Payal",age:23},
]
let result=students.filter(element=>element.age<24)
console.log(result);

let result2=students.map(element=>{
    if(element.name=='Bwaj')
    {
        element.age+=2
    }
    return element;
}
)  
    console.log(result2);

let result3=students.reduce((acc,ele)=>acc+ele.age,0)
console.log(result3);
