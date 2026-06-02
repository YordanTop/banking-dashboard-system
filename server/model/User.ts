import mongoose, { Schema, Types } from "mongoose";

export interface User{

    _id: Types.ObjectId,
    egn: string,
    uic?: string,
    fullnameLatin: string,
    email: string,
    phoneNumber: string,
    address: string,
    credentialID: Types.ObjectId,

}


const userSchema = new mongoose.Schema<User>({

    _id: {type: Schema.Types.ObjectId, required:true},
    egn: {type:String, required: true},
    uic: {type:String},
    fullnameLatin: {type:String, required: true},
    email: {type:String, required: true},
    phoneNumber: {type:String, required: true},
    address: {type:String, required: true},

    credentialID: {
        type: Schema.Types.ObjectId,
        ref: 'UserCredentials',
        required:true
    }

}) ;

export const userModel = mongoose.model("UserInfo", userSchema);
