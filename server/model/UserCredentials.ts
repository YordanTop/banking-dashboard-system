import mongoose, { Schema, Types } from "mongoose";
import { UserRole } from "./enums/UserRole";

export interface UserCredentials{
    
      _id: Types.ObjectId,
      username: string,
      password: string,
      role: UserRole

}

const userCredentialsSchema = new mongoose.Schema<UserCredentials>({
    
      _id: {type:Schema.Types.ObjectId, required:true},
      username: { type: String, required: true },
      password: { type: String, required: true},
      role: {
            type: String,
            enum: UserRole,
            required: true
          },

    }) ;

export const userCredentialsModel = mongoose.model("UserCredentials", userCredentialsSchema);

