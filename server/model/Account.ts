import mongoose, { Decimal128, Schema } from "mongoose";
import { AccountType } from "../utilities/AccountType";

export interface Account{

    account_type: AccountType,

    user_owner_id: Schema.Types.ObjectId,
    transaction_id: Schema.Types.ObjectId,

    name: string,

    amount: Schema.Types.Decimal128,
    currency: string
    
};

const accountSchema = new mongoose.Schema<Account>({

    account_type : {
        type: String,
        enum: AccountType,
        required: true
    },
    user_owner_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    transaction_id: {type: Schema.Types.ObjectId, required: true},

    name: {type: String, required: true},

    amount: {type: Schema.Types.Decimal128, required: true},
    currency: {type: String, required: true}

}
)

export const accountModel = mongoose.model("Account", accountSchema);