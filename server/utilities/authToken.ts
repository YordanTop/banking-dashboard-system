import jwt  from "jsonwebtoken"
import {jwtConfiguration} from "../config/config"


/** createCookieAuthToken it create JWT token */
export const createAuthToken = (validatioTokenProperies: object): string =>{

    
    const token = jwt.sign(validatioTokenProperies, jwtConfiguration.secret, {

        expiresIn: jwtConfiguration.expiration,
    });

    return token;

}


export const decodedAuthToken = (token:string): object =>{

    const decodedToken = jwt.verify(token, jwtConfiguration.secret);

    if(!decodedToken)
        throw new Error("The token is not verified!")
        

    return decodedToken as object;
}

