import mongoose from "mongoose";
import { Account } from "../../../model/Account";
import { Transaction, transactionModel } from "../../../model/Transaction";
import { faker } from "@faker-js/faker";
import { TransactionType } from "../../../model/enums/TransactionType";
import { Currency } from "../../../model/enums/Currency";
import { TransactionStatus } from "../../../model/enums/TransactionStatus";
import { ExternalSystem } from "../../../model/enums/ExternalSystem"

export async function TransactionSeeder(accounts: Account[], quantity:number){


    const transactionArray: Transaction[] = [];

    try{

        for(const account of accounts){

            for(let i=0; i < quantity; i++){

                const transactionType = faker.helpers.enumValue(TransactionType);
                
                let fromAccount: mongoose.Types.ObjectId | undefined = undefined;
                let toAccount: mongoose.Types.ObjectId | undefined = undefined;
                let externalSystem = undefined;

                if (transactionType === TransactionType.TRANSFER) {
                    fromAccount = account._id;
                    
                    const eligibleReceivers = accounts.filter(acc => !acc._id.equals(account._id));
                    if (eligibleReceivers.length > 0) {
                        toAccount = faker.helpers.arrayElement(eligibleReceivers)._id;
                    } else {
                        fromAccount = undefined;
                        toAccount = account._id;
                    }
                } else if (transactionType === TransactionType.DEPOSIT) {
                    fromAccount = undefined;
                    toAccount = account._id;
                    externalSystem = {
                        source_type: faker.helpers.enumValue(ExternalSystem),
                        terminal: faker.helpers.arrayElement(["ATM-231", "ATM-504", "WEB-PORTAL"])
                    };
                } else {
                    fromAccount = account._id;
                    toAccount = undefined;
                    externalSystem = {
                        source_type: faker.helpers.enumValue(ExternalSystem), 
                        terminal: faker.helpers.arrayElement(["ATM-231", "ATM-504", "WEB-PORTAL"])
                    };
                }

                const randomAmountStr = faker.finance.amount({ min: 5, max: 500, dec: 2 });

                transactionArray.push({
                    _id: new mongoose.Types.ObjectId(),
                    transaction_type: transactionType,
                    from_account: fromAccount,
                    to_account: toAccount,
                    amount: mongoose.Types.Decimal128.fromString(randomAmountStr),
                    currency: faker.helpers.enumValue(Currency),
                    created_at: faker.date.anytime(),
                    approvedBy: undefined,
                    status: faker.helpers.enumValue(TransactionStatus),
                    external_system: externalSystem
                });
            }
        }

       await transactionModel.insertMany(transactionArray);
    }catch(error){
        console.log(error);
    }

    return transactionArray;

}