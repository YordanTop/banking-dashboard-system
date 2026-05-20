import {Request, Response, NextFunction} from 'express';

import { CreateUserRequest } from '../dto/request/createUserRequest';

import { AuthService } from '../service/authService';

import { jwtConfiguration } from '../config/config';

import { UserCredentialsRequest } from '../dto/request/userCredentialsRequest';


const authService = new AuthService();

const authCookieName = "auth-cookie";

/** Login user to the system */
export const login = async (req:Request, res:Response) => {
    

        const userCredentials = req.body as UserCredentialsRequest || undefined;

        if(userCredentials == undefined){
           return res.status(404).send({
                status: 404,
                message: "The fields: username; password are not defiend!"
            }); 
        }

        if(userCredentials.username == null){
            return res.status(404).send({
                status: 404,
                message: "The user is not entered!"
            });
        }

        if(userCredentials.password == null){
            return res.status(404).send({
                status: 404,
                message: "The password is not entered!"
            });
        }
    
    try{
        const token = await authService.userCreateLoginToken(userCredentials);

        res.cookie(
            authCookieName,token,{
                httpOnly:true,
                secure:true,
                sameSite:"strict",
                expires: new Date(jwtConfiguration.expiration),
                maxAge: jwtConfiguration.expiration
            }
        )

        return res.status(200).send({
                status: 200,
                message: "The login was successful"
            });
    }
    catch(error){
        return res.status(404).send({
                status: 404,
                message: `${error}`
            });
    }
    
}

/** Logout user to the system */
export const logout = (req:Request, res:Response, next:NextFunction) => {

    try{
        res.clearCookie(authCookieName);

            return res.status(200).send({
                status: 200,
                message: "The logout was successful"
            });
    }
    catch(error){
        return res.status(404).send({
                status: 404,
                message: `${error}`
            });
    }

}

/** Register user to the system */
export const register = (req:Request, res:Response, next:NextFunction) => {

    const rawData = req.body as CreateUserRequest;


    try{
        authService.userRegister(rawData);   

        return res.status(200).send({
                status: 200,
                message: "The user was successful created!"
            });
    }
    catch(error){
        return res.status(404).send({
                status: 404,
                message: `${error}`
            });
    }

}


