import {CreateUserRequest} from "../dto/request/createUserRequest"
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
import { UserService } from "./userService";
import { error } from "console";


export class AuthService{

    private userRepository: UserRepository;
    private userService: UserService;

    constructor( ){
        this.userRepository = new UserRepository();
        this.userService = new UserService();
    }

    public async userRegister(userRequest:CreateUserRequest){

        await this.userService.createUser(userRequest);

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