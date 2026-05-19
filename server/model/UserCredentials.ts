import mongoose, { Schema } from "mongoose";
import { UserRole } from "../model/enums/UserRole";

export interface UserCredentials{
    
      username: string,
      password: string,
      role: UserRole

}

const userCredentialsSchema = new mongoose.Schema<UserCredentials>({
    
      username: { type: String, required: true },
      password: { type: String, required: true},
      role: {
            type: String,
            enum: UserRole,
            required: true
          },

    }) ;

export const userCredentialsModel = mongoose.model("UserCredentials", userCredentialsSchema);

