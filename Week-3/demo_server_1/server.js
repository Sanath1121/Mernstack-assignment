//create HTTP server
    //Import express
import exp from "express"
import { userApp } from "./userRoutes.js"
import { productApp } from "./productRoutes.js"
//Create server
const app = exp()

//test local in memory data


//Assigning port number
app.listen(3000, () => {
    console.log("HTTP server is listening on port 3000")
})

//body parsing middleware
app.use(exp.json())

//create API (get, post, put, delete, etc.) request handlers - route

//forward request to user app when path starts with '/user-api'
app.use('/user-api',userApp)
app.use('/product-api',productApp)