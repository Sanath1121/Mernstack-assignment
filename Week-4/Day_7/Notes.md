Run validator:
    {runValidators:true}

//

1) Projection:
    
    let userList=await userModel.find({},{username:1,_id:0,age:1});  
        
        //this will project all feilds with only username and age.


2) Unique Property:


3) Password protection-
    
    Hashing, encryption


4) User authentication 

    Every API has 2 routes - 
            Public route - Can be accessable by any user.
            Protected route - Can be accessable only by the AUTHENTICATED users.

    User authentication means submitting credentials and getting token.
    It is same as pay and get the ticket.
    Once the token received by the user, then he is an authenticated user.

    Steps for user authentication:
        After receiving user credentials object:
            1) Api verify the user name.
            2) If username is matched, compare the password.
            3) If passwords are matched, it generate encrypted token.
            4) Finally it send the token in response back to the client.

Storage of token in browser:

    Browser has three storage locations:
        Local Storage
        Session storage
        Cookies
    
    Local Storage and session storage content can be accessable by js of the browser.

    Normal cookie can also be accessable by js of the browser.

    "HTTP ONLY" cookies cannot be accessable by the js of the browser. So this is the safest place to store JWT token after user authentication.

