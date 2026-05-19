import {CreateUserRequest} from "../dto/request/createUserRequest"
import { UserCredentialsRequest } from "../dto/request/userCredentialsRequest"
import { UserCredentials } from "../model/UserCredentials";

import { createAuthToken } from "../utilities/authToken"

import { UserRepository } from "../repository/userRepository";
import { UserRole } from "../model/enums/UserRole";

import * as bcrypt from 'bcrypt';

export class AuthService{

    private userRepository: UserRepository;

    constructor( ){
        this.userRepository = new UserRepository();
    }

    public async userRegister(user:CreateUserRequest){

    }

    public async userCreateLoginToken(userCredentialsRequest:UserCredentialsRequest){

        const userSelected = await this.userRepository.getUserCredentialsByUsername(userCredentialsRequest.username);

        if(userSelected?.username == null)
            throw new Error("This user does not exists!");

        const matchPasswords = await bcrypt.compare(userCredentialsRequest.password, userSelected.password);

        if(matchPasswords == false)
            throw new Error("This password is incorrect!");


        const validatioTokenProperies = {
                username: userSelected?.username,
                role: UserRole.USER
        }

        return createAuthToken(validatioTokenProperies)

    }

    public async userLogout(){

    }


}