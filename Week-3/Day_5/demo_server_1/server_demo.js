//create HTTP server
    //Import express
import exp from "express"
//Create server
const app = exp()

//For now, lets maintain users in the application
let users = []
//Assigning port number
app.listen(3000, () => {
    console.log("HTTP server is listening on port 3000")
})

//bofy parsing middleware
app.use(exp.json())

//Create a custom middleware
function middleware2(req,res,next){
    console.log("Middleware-2 executed");
    //send response 
    res.json({message: "Response from middleware2"});
    //send response to next middleware
    next();
}
function middleware1(req,res,next){
    console.log("Middleware-1 executed");
    //send response 
    res.json({message: "Response from middleware1"});
    //send response to next middleware
    next();
}

//to execute for every incoming request
//app.use(middleware2);
//app.use(middleware1);
//create API (get, post, put, delete, etc.) request handlers - route

//get request handling route
app.get('/users', (req, res) => {
    //send res to clent
    res.json({message: "All users", payload: users});

    //read id from url parameters
    console.log(req.params);
    let userId=req.params
    //read user by this id
    let user=users.find(userObj=>userObj.id==userId)
})

//post request handling route
app.post('/users',middleware2, (req, res) => {
    //
    //resources are available in the body propelet products=[];
//rty of request object
    let newUser = req.body
    //insert the new user into the array
    users.push(newUser)
    res.status(201).json({message: "User created"})

})

//put request handling route
app.put('/users',middleware1, (req, res) => {
    //get modified user from req
    let upUser = req.body
    //find the user with the id exits in array
    let upIndex = users.findIndex(user => user.id === upUser.id)
    
    //if not found send res as "User not found"
    if(upIndex === -1){
        res.status(404).json({message: "User not found"})
        return res
    }
    
    //if found send, then modify user and res "User modified"
    let delUser = users.splice(upIndex, 1, upUser)
    res.status(200).json({message: "User found", prevUser: delUser})
})

//delete request handling route
app.delete('/users/:id', (req, res) => {
    let deleteUser=req;
    let deleteId=users.findIndex(user=>user.id==deleteUser.id)
    let deletedUser=users.splice(deleteId,1)
    let presentUsers=users;

    //send res to client
    res.status(201).json({message:"User found", deletedUser: deletedUser, currentUsers: presentUsers})
})