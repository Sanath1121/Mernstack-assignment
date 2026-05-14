import { Schema, model } from 'mongoose'

//create user schema with validations
//fields: name, email, dob, mobile no
const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'User name is required'] 
    },
    email:{
        type: String,
        required:[true, 'Email is required'],
        unique: true
    },
    dateOfBirth:{
        type: Date,
        required: [true, 'Date of birthis required']
    },
    mobileNo:{
        type: Number,
    },
    //for soft delete
    status:{
        type: Boolean,
        default: true
    }
},
{
    strict: "throw",
    timestamps: true,
    versionKey: false
})

//create user model for user Schema
export const UserModel = model('user', userSchema)