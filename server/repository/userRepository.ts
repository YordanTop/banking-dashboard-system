import mongoose, { ClientSession } from "mongoose";
import { userModel, User} from "../model/User";
import { userCredentialsModel, UserCredentials } from "../model/UserCredentials";


export class UserRepository{

    async createUser(user: User, transactionSession?: ClientSession){

        const userFromDatabase = await userModel.find({credentialID: user.credentialID});

        if(!userFromDatabase)
            return;
        
        const newUser = new userModel(user);


        await newUser.save({session: transactionSession});

    }

    async createUserCredentials(userCredentials: UserCredentials, transactionSession?: ClientSession){

        const userCredentialsFromDatabase = await userCredentialsModel.find({username: userCredentials.username});

        if(!userCredentialsFromDatabase)
            return;

        const newUserCredentials = new userCredentialsModel(userCredentials);

        await newUserCredentials.save({session: transactionSession});

    }

    async getAllUsers():Promise<Array<User> | null>{

        const users = await userModel.find().lean<User[]>();
        return users;

    }

    async getUserCredentialsByUsername(username: string):Promise<UserCredentials | null>{
        const userFromDatabase = await userCredentialsModel.findOne({username: username}).lean<UserCredentials>();
        return userFromDatabase;
    }


    async updateUser(user: User){

        let userFromDatabase = await userModel.findById(user.credentialID);

        if(userFromDatabase == null)
            return;
        

        userFromDatabase.egn = user.egn;
        userFromDatabase.address = user.address;
        userFromDatabase.uic = user.uic;
        userFromDatabase.fullnameCyrillic = user.fullnameCyrillic;
        userFromDatabase.fullnameLatin = user.fullnameLatin;
        userFromDatabase.email = user.email;
        userFromDatabase.phoneNumber = user.phoneNumber;
        

        await userFromDatabase?.save();

    }


}