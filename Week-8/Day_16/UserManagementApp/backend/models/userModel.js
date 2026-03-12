import {Schema,model} from "mongoose";
//Create user schema with validations
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    dateOfBirth:{
        type:Date,
        required:[true,"Date of birth is required"]
    },
    mobileNumber:{
        type:String,
        required:[true,"Mobile number is required"],
    },
    //for soft delete we can add a status field in user schema and set it to false when we want to delete the user and set it to true when we want to activate the user
    status:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true,
    versionKey:false,
    strict:"throw"
})

//Create user model for user schema
const userModel=model('user',userSchema);
export default userModel;