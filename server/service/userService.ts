
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

        const updatedUser = await this.userRepository.updateUser(user);
        if(!updatedUser) {
            throw new Error("User not found for update.");
        }

        return updatedUser;
    }

    async changePassword(username: string, newPassword: string){

        if(!username || !username.trim()) {
            throw new Error("Username is required.");
        }

        if(!newPassword || newPassword.length < 6) {
            throw new Error("New password must be at least 6 characters long.");
        }

        const updatedCredentials = await this.userRepository.updatePasswordByUsername(username, newPassword);
        if(!updatedCredentials) {
            throw new Error(`Unable to find user credentials for '${username}'.`);
        }

        return updatedCredentials;
    }

    async changeAuthorization(username: string, newRole: UserRole){

        if(!username || !username.trim()) {
            throw new Error("Username is required.");
        }

        if(!newRole) {
            throw new Error("New role is required.");
        }

        const updatedCredentials = await this.userRepository.updateRoleByUsername(username, newRole);
        if(!updatedCredentials) {
            throw new Error(`Unable to find user credentials for '${username}'.`);
        }

        return updatedCredentials;
    }

    async getUserByName(username: string){

        if(!username || !username.trim()) {
            throw new Error("Username is required.");
        }

        const user = await this.userRepository.getUserByUsername(username);
        if(!user) {
            throw new Error(`User '${username}' not found.`);
        }

        return user;
    }

    async getAllUsers(){

        const users = await this.userRepository.getAllUsers();
        return users ?? [];
    }

    async deleteUser(user: User){

        if(!user || !user._id || !user.credentialID) {
            throw new Error("Invalid user object provided!");
        }

        try {
            const transactionSession = await mongoose.startSession();
            await transactionSession.withTransaction(async () => {
                const deleted = await this.userRepository.deleteUser(user, transactionSession);
                if(!deleted) {
                    throw new Error("User not found for deletion.");
                }
            });
            await transactionSession.endSession();
        } catch(error) {
            throw new Error("Failed to delete user: " + error);
        }
    }
    


}