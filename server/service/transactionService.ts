import {CreateUserRequest} from "../dto/request/createUserRequest"
import { UserCredentialsRequest } from "../dto/request/userCredentialsRequest"
import { UserCredentials } from "../model/UserCredentials";

import { createAuthToken } from "../utilities/authToken"

import { UserRepository } from "../repository/userRepository";
import { UserRole } from "../model/enums/UserRole";

import { User } from "../model/User";
import mongoose from "mongoose";

import { NotFoundRecordException } from "../exception/http_request/notFoundRecordException";
import { AuthorizationException } from "../exception/http_request/authorizationException";
import { decodedAuthToken } from "../utilities/authToken"
import { AuthenticationException } from "../exception/http_request/authenticationException";
import { UserService } from "./userService";


export class TransactionService{



    constructor( ){
 
    }

    public async createTransaction(){
    
        
    
    }

    public async getAllTransactions(){

    }

    public async getTransactionById(){

    }

    private async autoPendingTransaction(){

    }

    public async approveTransaction(){

    }

    public async rejectTransaction(){
        
    }


}