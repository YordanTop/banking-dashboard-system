
import { ConfigurationException } from "../../exception/configurationException";
import {jwtConfiguration } from "../config";

export function JwtEnvPropertiesHandler(){

    if(jwtConfiguration.secret == "none"){
        throw new ConfigurationException("JWT secret key is not defied!");
    }

    const minimumExpiration = 360000;
    if(jwtConfiguration.expiration < minimumExpiration){
        throw new ConfigurationException(`The authentication expiration propety should be minimum: ${minimumExpiration} milliseconds!`);
    }

    if(typeof jwtConfiguration.expiration !== "number"){
        throw new ConfigurationException(`The authentication expiration propety type has to be a number!`);
    }

}