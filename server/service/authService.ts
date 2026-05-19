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

        const userCredentials = await this.userRepository.getUserCredentialsByUsername(userCredentialsRequest.username);

        if(userCredentials?.username == undefined)
            throw new Error("This user does not exists!");


        const validatioTokenProperies = {
                username: userCredentials.username,
                role: userCredentials.role,
        }

        console.log(validatioTokenProperies)

        return createAuthToken(validatioTokenProperies)

    }

    public async userLogout(){

    }


}