import mongoose, { Schema, Types } from "mongoose"
import { TransactionType } from "./enums/TransactionType"
import { TransactionStatus } from "./enums/TransactionStatus"
import { Currency } from "./enums/Currency"
import { ExternalSystem } from "./enums/ExternalSystem"

export interface Transaction{

    _id:Types.ObjectId,
    transaction_type: TransactionType
    from_account?: Types.ObjectId,
    to_account?: Types.ObjectId,
    external_system?:{
        source_type:ExternalSystem,
        terminal: String
    },
    amount: Types.Decimal128,
    currency: Currency,
    created_at: Date,
    approvedBy?: Types.ObjectId,
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
        required:false,
        default:undefined
    },

    to_account:{
        type: Schema.Types.ObjectId,
        ref: "Account",
        required:false,
        default:undefined
    },

    external_system:{
        source_type:{
            type: String,
            enum:ExternalSystem
        },
        terminal:{type:String},
    },

    amount: {type: Schema.Types.Decimal128, required:true},
    currency: {
        type: String,
        enum: Currency,
        required: true
    },

    created_at: {type: Date, required:true, default:Date.now()},
    

    approvedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    status: {
        type: String,
        enum: TransactionStatus,
        default: TransactionStatus.PENDING,
        required:true
    },
});

export const transactionModel = mongoose.model("Transaction", transactionSchema);