import { ConfigurationException } from "../../exception/configurationException";
import {databaseConfiguration } from "../config";

export function DatabaseEnvPropertiesHandler(){

    if(databaseConfiguration.database == "none"){
        throw new ConfigurationException("Database does not have specified database!");
    }
    
    if(databaseConfiguration.port == 0){
        throw new ConfigurationException(`Database does not have specified port!`);
    }

    if(typeof databaseConfiguration.port !== "number"){
        throw new ConfigurationException(`The port type has to be a number!`);
    }

    if(databaseConfiguration.uri == "none"){
        throw new ConfigurationException(`Database does not have specified uri!`);
    }
}