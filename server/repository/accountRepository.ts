
import { CreateBankAccountRequest } from "../dto/request/createBankAccountRequest";
import {Account, accountModel} from "../model/Account";
import mongoose from "mongoose";  

export class AccountRepository{


    async createAccount(createAccountRequest: CreateBankAccountRequest){

        if(createAccountRequest == null)
            throw new Error("The create account request is null.");

        const accountFromDatabase = await accountModel.findOne({ iban: createAccountRequest.iban }).lean<Account | null>();

        if(accountFromDatabase != null)
            throw new Error("An account with this IBAN already exists.");

        const newAccount = new accountModel({
            _id: new mongoose.Types.ObjectId(),
            account_type: createAccountRequest.account_type,
            iban: createAccountRequest.iban,
            user_owner_id: createAccountRequest.user_owner_id,
            name: createAccountRequest.name,
            amount: createAccountRequest.amount,
            currency: createAccountRequest.currency,
            created_at: Date.now().toString()
        });

        await newAccount.save();
    }

    async DeleteAccountByIban(iban: string){

        const accountFromDatabase = await accountModel.findOne({ iban: iban }).lean<Account | null>();

        if(accountFromDatabase != null)
            throw new Error("This account does not exist!");

        
            

    }



} 