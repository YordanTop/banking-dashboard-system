
import { UserRepository } from "../repository/userRepository";

import { User } from "../model/User";
import { UserRole } from "../model/enums/UserRole";
import { UserCredentials } from "../model/UserCredentials";
import mongoose from "mongoose";
import { CreateUserRequest } from "../dto/request/createUserRequest";

export class UserService{

    private userRepository: UserRepository;

    constructor( ){
        this.userRepository = new UserRepository();
    }

    async createUser(userRequest: CreateUserRequest){

        //@todo handlers for the user parameter

       const userFromDatabase = await this.userRepository.getUserCredentialsByUsername(userRequest.username);

        if(userFromDatabase != null)
            throw new Error("This user already exists!");

        try{

            const transactionSession = await mongoose.startSession();

            await transactionSession.withTransaction(async () =>{

                const userCredentialsId = new mongoose.Types.ObjectId();

                const userMapping: User = {

                    _id: new mongoose.Types.ObjectId(),
                    egn: userRequest.egn,
                    uic: userRequest.uic,
                    fullnameLatin: userRequest.fullnameLatin,
                    email: userRequest.email,
                    phoneNumber: userRequest.phoneNumber,
                    address: userRequest.address,
                    credentialID: userCredentialsId, 

                }

                const userCredentialsMapping: UserCredentials = {

                    _id: userCredentialsId,
                    username: userRequest.username,
                    password: userRequest.password,
                    role: UserRole.USER

                }
                
                await this.userRepository.createUser(userMapping, transactionSession);
                await this.userRepository.createUserCredentials(userCredentialsMapping, transactionSession);

            });
            
            await transactionSession.endSession();
            
            
        }catch(error){

            throw new Error("Creating user transaction was terminated!" + error)
        }

    }

    async updateUser(user: User){


        if(!user || !user._id) {
            throw new Error("Invalid user object provided!");
        }

        try {
            await this.userRepository.updateUser(user);
        } catch(error) {
            throw new Error("Failed to update user: " + error);
        }

    }

    async changePassword(username: string, newPassword: string){

        //@todo handlers for the password parameter


    }

    async changeAuthorization(username: string, newRole: UserRole){

        //@todo handlers for the auth parameter


    }

    async getUserByName(username: string){

        //@todo handlers for the user parameter


    }

    async getAllUsers(){

        //@todo handlers for the users parameter

    
    }

    async deleteUser(user: User){

        //@todo handlers for the user parameter


    }
    


}