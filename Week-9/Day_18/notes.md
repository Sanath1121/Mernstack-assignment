Fetch:
GET
    let resObject=await fetch("",method:"GET")

    if(res.status!=200){
        throw new Error("")
    }
<!-- {message:"", payload:""} -->    
    let res=await resObj.json()   

POST
    let resObject=await fetch("",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({data:""})
    })    



Axios:

    let useObj=await axios.get("")
<!-- {message:"", payload:""} -->
    let res=resObj.data;   

     <!--  -->
    let resObject=await axios.post("",{
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({data:""})
    })
