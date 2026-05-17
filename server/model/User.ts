import mongoose, { Schema } from "mongoose";

export interface User{

    egn: string,
    uic?: string,
    passportId?: string,
    fullnameCyrillic: string,
    fullnameLatin: string,
    email: string,
    phoneNumber: string,
    address: string,
    credentialID: Schema.Types.ObjectId,

}


const userSchema = new mongoose.Schema<User>({

    egn: {type:String, required: true},
    uic: {type:String},
    passportId: {type:String},
    fullnameCyrillic: {type:String, required: true},
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
