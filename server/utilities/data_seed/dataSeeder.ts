import { dataMockConfiguration } from "../../config/config";
import { AccountSeeder } from "./custom_seeder/accountSeeder";
import { TransactionSeeder } from "./custom_seeder/transactionSeeder";
import { UserSeeder } from "./custom_seeder/userSeeder";


export async function DataSeeder(){


    if(dataMockConfiguration.enableDataMocking){

        console.log("Generating mocking data...");

        const users = await UserSeeder(dataMockConfiguration.mockingDataUserQuantity);

        const accounts = await AccountSeeder(users, dataMockConfiguration.mockingDataUserAccounts)

        await TransactionSeeder(accounts, dataMockConfiguration.mockingDataUserTransactionHistory);

        console.log("Data seeding is complete!");
    }else{
        console.log("Mocking data was not generated!");
    }

}