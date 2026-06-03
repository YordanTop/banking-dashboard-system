import { Request, Response, NextFunction } from 'express';
import { authCookie } from '../controller/authController';
import { AuthenticationException } from '../exception/http_request/authenticationException';
import { AuthService } from '../service/authService';
import { AuthenticationRequest, UserCredentials } from '../dto/request/authenticationRequest';
import { UserRole } from '../model/enums/UserRole';
import { AuthorizationException } from '../exception/http_request/authorizationException';

export const authenticationHandler = (req:AuthenticationRequest,res:Response,next:NextFunction) => {

    const authenticationCookie = req.cookies[authCookie.cookieName] || null;

    const authService = new AuthService();

    if(authenticationCookie == null){
        return next( new AuthenticationException("The authentication cookie doesn't exists"));
    }


    authService.userGetCredentials(authenticationCookie).then((result) => {

        req.user = result as UserCredentials;
        next();
    })
    .catch((error) => {
        next(new AuthenticationException(error));
    });



}


export const authorizationHandler = (...allowedRoles: UserRole[]) => {
    
    return (req:AuthenticationRequest,res:Response,next:NextFunction) => {

        if (!req.user) {
            return next(new AuthenticationException("User credentials missing."));
        }

        if (!allowedRoles.includes(req.user.role)) {

            return next(new AuthorizationException("Access Denied: Insufficient permissions."));
        }

        next();
    }
}
