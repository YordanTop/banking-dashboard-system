import mongoose, { Schema, Types } from "mongoose";
import { UserRole } from "./enums/UserRole";

import * as bcrypt from "bcrypt";

export interface UserCredentials{
    
      _id: Types.ObjectId,
      username: string,
      password: string,
      role: UserRole

}

const userCredentialsSchema = new mongoose.Schema<UserCredentials>({
    
      _id: {type:Schema.Types.ObjectId, required:true},
      username: { type: String, required: true, unique: true},
      password: { type: String, required: true},
      role: {
            type: String,
            enum: UserRole,
            required: true
          },
}) ;


userCredentialsSchema.pre("save", async function() {
      if(!this.isModified('password'))
      {
            return;
      }

      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
})

export const userCredentialsModel = mongoose.model("UserCredentials", userCredentialsSchema);

