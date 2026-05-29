
import { ConfigurationException } from "../../exception/configurationException";
import {serverConfiguration } from "../config";

export function ServerEnvPropertiesHandler(){

    if(serverConfiguration.host == "none"){
        throw new ConfigurationException("Server does not have a url link!");
    }

    if(serverConfiguration.port == 0){
        throw new ConfigurationException("Server does not have a specified port!");
    }

    if(typeof serverConfiguration.port !== "number"){
        throw new ConfigurationException(`The server port type has to be a number!`);
    }

}