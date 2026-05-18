import {CreateUserRequest} from "../dto/request/createUserRequest"
import { UserCredentialsRequest } from "../dto/request/userCredentialRequest"
import { UserCredentials } from "../model/UserCredentials";

import { createAuthToken } from "../utilities/authToken"

import { UserRepository } from "../repository/userRepository";
import { UserRole } from "../model/enums/UserRole";

export class AuthService{

    private userRepository: UserRepository;

    constructor( ){
        this.userRepository = new UserRepository();
    }

    public async userRegister(user:CreateUserRequest){

    }

    public async userCreateLoginToken(userCredentialsRequest:UserCredentialsRequest){

        const userSelected = await this.userRepository.getUserByUsername(userCredentialsRequest.username);

        if(userSelected == undefined)
            throw new Error("This user does not exists!");

        const validatioTokenProperies = {
                id: userSelected,
                username: userSelected,
                role: UserRole.USER
        }

        return createAuthToken(validatioTokenProperies)

    }

    public async userLogout(){

    }


}