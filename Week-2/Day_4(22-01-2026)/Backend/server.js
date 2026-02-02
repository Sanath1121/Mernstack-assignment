import exe from "express"

let app=exe();
app.listen(4000,()=>console.log("Server is listening...."));
app.get("/user",(req,res)=>{res.json("This is response from get request.")});
app.post("/user",(req,res)=>{res.json("This is a response from post request")});
app.put("/user/id",(req,res)=>{res.json("This is a response from get request")})
app.delete("user/id",(req,res)=>{res.json("This is a response from delete request")});