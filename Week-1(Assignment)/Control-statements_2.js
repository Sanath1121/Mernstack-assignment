// Created: 05-Jan-26 02:23:52 PM
let price=1299;
let courseTag=0;
if (price<500)
{
    courseTag= "Budget Course";
}
else if(price>=500 && price<=1000)
{
    courseTag= "Standard Course";
}
else if(price>1000)
{
    courseTag= "Premium Course";
}
console.log(courseTag);