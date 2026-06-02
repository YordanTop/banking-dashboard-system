import mongoose, { Schema, Types } from "mongoose";
import { AccountType } from "./enums/AccountType";
import { Currency } from "./enums/Currency";

export interface Account{

    _id: Types.ObjectId,
    account_type: AccountType,
    iban:string,
    user_owner_id: Types.ObjectId,
    name: string,
    amount: Types.Decimal128,
    currency: Currency,
    created_at: Date

}

const accountSchema = new mongoose.Schema<Account>({

    _id: {type: Schema.Types.ObjectId, required:true},

    account_type : {
        type: String,
        enum: AccountType,
        required: true
    },

    iban:{ type: String, required:true},

    user_owner_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name: {type: String, required: true},

    amount: {type: Schema.Types.Decimal128, required: true},
    currency: {type: String, required: true},
    created_at: {type: Schema.Types.Date, required:true}

}
)

export const accountModel = mongoose.model("Account", accountSchema);