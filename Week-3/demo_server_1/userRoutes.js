import exp from "express"
//Create mini express route
export const userApp=exp.Router()
let users = []

//get request handling route
userApp.get('/users', (req, res) => {
    //send res to client
    res.json({message: "All users", payload: users});

    //read id from url parameters
    console.log(req.params);
    let userId=req.params
    //read user by this id
    let user=users.find(userObj=>userObj.id==userId)
})

//post request handling route
userApp.post('/users', (req, res) => {
    //
    //resources are available in the body property of request object
    let newUser = req.body
    //insert the new user into the array
    users.push(newUser)
    res.status(201).json({message: "User created"})

})

//put request handling route
userApp.put('/users', (req, res) => {
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
userApp.delete('/users/:id', (req, res) => {
    let deleteUser=req;
    let deleteId=users.findIndex(user=>user.id==deleteUser.id)
    let deletedUser=users.splice(deleteId,1)
    let presentUsers=users;

    //send res to client
    res.status(201).json({message:"User found", deletedUser: deletedUser, currentUsers: presentUsers})
})