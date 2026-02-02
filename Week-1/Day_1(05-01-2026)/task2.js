// Created: 05-Jan-26 02:17:51 PM
let isLoggedIn=true;
let isProfileComplete=false;
let message="";
if (!isLoggedIn)
{
    message="Please log in";
}
else if (isLoggedIn && !isProfileComplete)
{
    message="Complete your profile";
}
else if(isLoggedIn && isProfileComplete)
{
    message="Welcome back";
}
console.log(message);
