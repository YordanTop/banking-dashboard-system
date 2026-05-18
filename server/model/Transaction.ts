import mongoose, { Schema } from "mongoose"
import { TransactionType } from "./enums/TransactionType"
import { TransactionStatus } from "./enums/TransactionStatus"

export interface Transaction{

    transaction_type: TransactionType

    from_account: Schema.Types.ObjectId,
    to_account: Schema.Types.ObjectId,

    amount: Schema.Types.Decimal128,
    currency: string,

    created_at: Date,
    completed_at: Date,

    status: TransactionStatus
}

const transactionSchema = new mongoose.Schema<Transaction>({

    transaction_type: {
        type: String,
        enum: TransactionType,
        required:true
    },

    from_account: {
        type: Schema.Types.ObjectId,
        ref: "Account",
        required:true
    },

    to_account:{
        type: Schema.Types.ObjectId,
        ref: "Account",
        required:true
    },

    amount: {type: Schema.Types.Decimal128, required:true},
    currency: {type: String, required: true},

    created_at: {type: Date, required:true},
    completed_at: {type: Date, required:true},
    
    status: {
        type: String,
        enum: TransactionStatus,
        required:true
    },
});

export const transactionModel = mongoose.model("Transaction", transactionSchema);