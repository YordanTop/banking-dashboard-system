import {Request, Response, NextFunction, CookieOptions} from 'express';

import { CreateUserRequest } from '../dto/request/createUserRequest';

import { AuthService } from '../service/authService';

import { jwtConfiguration } from '../config/config';

import { UserCredentialsRequest } from '../dto/request/userCredentialsRequest';
import { BadBodyRequestException } from '../exception/http_request/badBodyRequestException';
import { AuthenticationException } from '../exception/http_request/authenticationException';
import { RecordConflictException } from '../exception/http_request/recordConflictException';


const authService = new AuthService();

interface authCookieOptions extends CookieOptions{

    cookieName: string

}


export const authCookie:authCookieOptions = {
    cookieName:"auth-cookie",
    httpOnly:true,
    secure:true,
    sameSite:"strict",
    expires: new Date(jwtConfiguration.expiration),
    maxAge: jwtConfiguration.expiration
}


/** Login user to the system */
export const login = async (req:Request, res:Response, next:NextFunction) => {
    
    const userCredentials = req.body as UserCredentialsRequest || undefined;

        if(userCredentials == undefined){
            throw new BadBodyRequestException("The body does not contain the right parameters!");
        }

        if(userCredentials.username == null){
            throw new BadBodyRequestException("The username is not defiend!");
        }

        if(userCredentials.password == null){
            throw new BadBodyRequestException("The password is not defiend!");
        }
    
        const token = await authService.userCreateLoginToken(userCredentials)
        .then((result) => {
                    res.cookie(
                        authCookie.cookieName,result,authCookie
                    )
        
                    return res.status(200).json({
                            status: 200,
                            message: "The login was successful"
                        });
        }).catch((error) => {next(new AuthenticationException(error.message))});
    
}

/** Logout user to the system */
export const logout = (req:Request, res:Response,next:NextFunction) => {

    const authenticationCookie = req.cookies[authCookie.cookieName] || null;


    if(authenticationCookie == null)
        next(new AuthenticationException("The authentication cookie doesn't exists"));

    
    res.clearCookie(authCookie.cookieName);


    return res.status(200).json({
            status: 200,
            message: "The logout was successful"
    });


}

export const getCredentials = (req:Request, res:Response, next:NextFunction) => {

    const authenticationCookie = req.cookies[authCookie.cookieName] || null;


    if(authenticationCookie == null)
        throw new AuthenticationException("The authentication cookie doesn't exists");


    authService.userGetCredentials(authenticationCookie)
        .then((result) => {
                return res.status(200).json({
                status: 200,
                credentials: result
            });
        })
        .catch((error) => {next(new AuthenticationException(error.message))});

}

/** Register user to the system */
export const register = (req:Request, res:Response, next:NextFunction) => {

    const rawData = req.body as CreateUserRequest;

    authService.userRegister(rawData)
        .then(()=>{
            return res.status(200).json({
                status: 200,
                message: "The user was successfully created!"
                });
        })
        .catch((error) => {
        next(new RecordConflictException(error.message))
    });   

}


