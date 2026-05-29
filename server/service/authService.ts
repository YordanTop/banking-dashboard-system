import {RegisterUserRequest} from "../dto/request/registerUserRequest"
import { UserCredentialsRequest } from "../dto/request/userCredentialsRequest"
import { UserCredentials } from "../model/UserCredentials";

import { createAuthToken } from "../utilities/authToken"

import { UserRepository } from "../repository/userRepository";
import { UserRole } from "../model/enums/UserRole";

import { User } from "../model/User";
import mongoose from "mongoose";

import * as bcrypt from "bcrypt";
import { NotFoundRecordException } from "../exception/http_request/notFoundRecordException";
import { AuthorizationException } from "../exception/http_request/authorizationException";
import { decodedAuthToken } from "../utilities/authToken"
import { AuthenticationException } from "../exception/http_request/authenticationException";


export class AuthService{

    private userRepository: UserRepository;

    constructor( ){
        this.userRepository = new UserRepository();
    }

    public async userRegister(userRequest:RegisterUserRequest){

        const userFromDatabase = await this.userRepository.getUserCredentialsByUsername(userRequest.username);

        if(userFromDatabase != null)
            throw new Error("This user already exists!");

        try{

            const transactionSession = await mongoose.startSession();

            await transactionSession.withTransaction(async () =>{
                
                const userCredentialsId = new mongoose.Types.ObjectId();

                const userMapping: User = {

                    egn: userRequest.egn,
                    uic: userRequest.uic,
                    fullnameCyrillic: userRequest.fullnameCyrillic,
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

    public async userCreateLoginToken(userCredentialsRequest:UserCredentialsRequest){

        const userSelected = await this.userRepository.getUserCredentialsByUsername(userCredentialsRequest.username);

        if(userSelected?.username == null)
            throw new NotFoundRecordException("This user does not exists!");


        const matchPasswords = await bcrypt.compare(userCredentialsRequest.password, userSelected.password);

        if(matchPasswords == false)
            throw new AuthorizationException("This password is incorrect!");


        const validatioTokenProperies = {

                id: userSelected._id,
                username: userSelected.username,
                role: UserRole.USER
        }

        return createAuthToken(validatioTokenProperies)

    }

    public async userGetCredentials(token:string):Promise<object>{

        if(!token)
            throw new AuthenticationException("Can not find JWT token information!");

        const decodedToken = decodedAuthToken(token);

        return decodedToken;

    }

}