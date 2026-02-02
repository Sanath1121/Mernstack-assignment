//js is a single threaded programming language
//a thread can do one task at a time
//broswer's javascript runtime = JS engine +web APIs +Event loops
//NodeJs javascript runtime = JS enginer + Js APIs + Event loops

//1.Synchronous Blocking 2.Synchronous non-blocking 3.Asynchronous Blocking
// console.log("Person-1 ordered Biryani") //non block sync
// setTimeout(()=>{ //block sync
//     console.log("Person 1 received Biryani");
// },5000);

//Ravi made a promise to kiran that he will call in 10 minutes
let futureAvailability=true;
//create promise
let promise = new Promise((fulfill,reject)=>{
    setTimeout(()=>{
        if(futureAvailability==false){
            fulfill("Hello friend!, How are you?");
        }
        else{
            reject("Sorry, I will call you later");
        }
    },5000);
});

//continue promise
promise
.then((message)=>{console.log("Fulfilled:",message);})
.catch((error)=>{console.log("Error:",error)})




