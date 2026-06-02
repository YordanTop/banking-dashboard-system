import mongoose from "mongoose";
import { Account, accountModel } from "../../../model/Account";
import { User } from "../../../model/User";
import { AccountType } from "../../../model/enums/AccountType";
import { faker } from "@faker-js/faker";
import { Currency } from "../../../model/enums/Currency";


export async function AccountSeeder(users: User[], quantity:number){


    const accountArray: Account[] = [];

    try{

        for(const user of users){

            for(let i=0; i < quantity; i++){
                accountArray.push({

                    _id: new mongoose.Types.ObjectId,
                    account_type: faker.helpers.enumValue(AccountType),
                    iban: faker.finance.iban(),
                    user_owner_id: user._id,
                    name: faker.finance.accountName(),
                    amount: new mongoose.Types.Decimal128(faker.finance.amount()),
                    currency: faker.helpers.enumValue(Currency),
                    created_at: faker.date.anytime(),

                })
            }
        }

       await accountModel.insertMany(accountArray);
    }catch(error){
        console.log(error);
    }

    return accountArray;

}