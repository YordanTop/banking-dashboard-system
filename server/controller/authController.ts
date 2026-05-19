import {Request, Response, NextFunction} from 'express';

import { CreateUserRequest } from '../dto/request/createUserRequest';

import { AuthService } from '../service/authService';

import { jwtConfiguration } from '../config/config';
import { UserCredentials } from '../model/UserCredentials';
import { UserCredentialsRequest } from '../dto/request/userCredentialsRequest';


const authService = new AuthService();

/** Login user to the system */
export const login = async (req:Request, res:Response) => {
    

        const userCredentials = req.body as UserCredentialsRequest || undefined;

        if(userCredentials == undefined){
           return res.status(404).send({
                status: 404,
                error: "The fields: username; password are not defiend!"
            }); 
        }

        if(userCredentials.username == undefined){
            return res.status(404).send({
                status: 404,
                error: "The user is not entered!"
            });
        }

        if(userCredentials.password == undefined){
            return res.status(404).send({
                status: 404,
                error: "The password is not entered!"
            });
        }
    
    try{
        const token = await authService.userCreateLoginToken(userCredentials);

        res.cookie(
            "auth-cookie",token,{
                httpOnly:true,
                secure:true,
                sameSite:"strict",
                expires: new Date(jwtConfiguration.expiration),
                maxAge: jwtConfiguration.expiration
            }
        )

        return res.status(200).send({
                status: 200,
                error: "The login was successful"
            });
    }
    catch(error){
        return res.status(404).send({
                status: 404,
                error: `${error}`
            });
    }
    
}

/** Logout user to the system */
export const logout = (req:Request, res:Response, next:NextFunction) => {
    
}

/** Register user to the system */
export const register = (req:Request, res:Response, next:NextFunction) => {

        const rawData = req.body as CreateUserRequest;

        authService.userRegister(rawData);    

}

/** Change user passport */
export const changePassword = (req:Request, res:Response, next:NextFunction) => {

}

/** Switching roles */
export const changeAuthorizationAccess = (req:Request, res:Response, next:NextFunction) => {

}

