// Program to create a complex object with methods to process student data and calculate average marks

// Created: 06-Jan-26 10:01:11 AM
// let test={
//     a:1,
//     b:2,
//     c:3
// }

// //Unpack Object:(destructuring)
// let {a,b,c}=test;
// console.log(test.a);
// console.log(b);
// console.log(c);

//complex object
let student={
    sno:100,
    name:'Bhanu',
    marks:[98,89,86],
    address:{
        'city':'Hyd',
        'pincode':500068
    },
    getData:function(){
        //object processing business logic
        console.log('Marks',this.marks);
    },
    getAverage:function(){
        let x=0
        for(let i in this.marks)
            x+=this.marks[i];
        x=x/this.marks.length;
        console.log('Average marks',x)
    }
}
    console.log(student.address.city);
    student.getData();
    student.getAverage();
    console.log(student['getAverage']());


