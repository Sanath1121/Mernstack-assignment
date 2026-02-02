// Created: 05-Jan-26 03:12:09 PM

//write a function that receives marks array as argument and returns the smallest element
function smallestElement(array)
{
    let x=array[0];
    for(let i of array)
    {
        if(i<x)
            x=i;
    }
    console.log(x);
}
let marks=[98,87,89,67,56];
smallestElement(marks);