import { Types } from "mongoose";
import { AccountType } from "../../model/enums/AccountType";
import { Currency } from "../../model/enums/Currency";

export interface CreateBankAccountRequest{ 

    account_type: AccountType,
    iban:string,
    user_owner_id: Types.ObjectId,
    name: string,
    amount: Types.Decimal128,
    currency: Currency
    
}