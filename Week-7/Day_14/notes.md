React-Hook:
    Install:
        npm install react-hook-form

    Import:
        import {useForm} from "react-hook-form"
    
    Returns:
        Object
        usage: const {register,handleSubmit} =useForm()

    Register() function:

    
    Component Side Effects:

        A component can render initially before displaying content.
        
        If the component is about to make an api request it should wait untill the initial rendering is completed.

        If both initial rendering and api request happen together, it leads to unexpected bugs in the application.

        No dependency array - run after every render
            useEffect(()=>{side effect})

        Empty array [] - runs once on mount
            useEffect(()=>{side effect},[])

        With dependencies - 
            useEffect(()=>{side Effect},[dependency])
    
