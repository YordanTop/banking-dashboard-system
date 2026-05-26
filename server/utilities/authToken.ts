import jwt  from "jsonwebtoken"
import {jwtConfiguration} from "../config/config"


/** createCookieAuthToken it create JWT token */
export const createAuthToken = (validatioTokenProperies: object): string =>{

    const token = jwt.sign(validatioTokenProperies, jwtConfiguration.secret, {

        expiresIn: jwtConfiguration.expiration,
    });

    return token;

}


const verifyAuthToken = (token:string) =>{

    jwt.verify(token, jwtConfiguration.secret, function(err, decode){

        if(err){
            throw new Error(`The token is not verified! ${err}`)
        }

    });

}

