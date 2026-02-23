function Test1(props){

    let {message1,message2}=props.messages
    // {message1:"" ,message2:""}
//state
return(
<div className="p-24 bg-yellow-200 m-2">
    <p className="text-3xl">{message1}</p>
    <p className="text-3xl">{message2}</p>
</div>
)
}

export default Test1;