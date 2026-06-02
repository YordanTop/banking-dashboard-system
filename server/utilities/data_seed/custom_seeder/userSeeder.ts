import { faker } from "@faker-js/faker";  
import {User, userModel} from "../../../model/User"
import mongoose from "mongoose";
import { UserCredentials, userCredentialsModel } from "../../../model/UserCredentials";
import { UserRole } from "../../../model/enums/UserRole";
import generateRandomEGN from "../../helper/generateRandomEgn"



export async function UserSeeder(quantity: number){


    const fakeUsersArray: User[] = [];
    const fakeUserCredentialsArray: UserCredentials[] = [];

    try{

        for(let i=0; i<quantity; i++){
            const credentialID = new mongoose.Types.ObjectId();

            const fakeUser:User = {

                _id: new mongoose.Types.ObjectId(),
                egn: generateRandomEGN(),
                uic: faker.helpers.maybe(() =>faker.string.numeric(9)),
                fullnameLatin: faker.person.fullName(),
                email: faker.internet.email(),
                phoneNumber: faker.phone.number({style:"international"}),
                address: faker.location.street(),
                credentialID: credentialID,

            } 

            const fakeUserCredentials:UserCredentials = {
                
                _id: credentialID,
                username: faker.internet.username(),
                password: faker.internet.password(),
                role: faker.helpers.arrayElement([UserRole.USER, UserRole.ADMIN])
            }

            fakeUsersArray.push(fakeUser);
            fakeUserCredentialsArray.push(fakeUserCredentials);

           
        }
        
        await userModel.insertMany(fakeUsersArray);
        await userCredentialsModel.insertMany(fakeUserCredentialsArray);

    }catch(error){
        console.log(error)
    }

    return fakeUsersArray;
}
