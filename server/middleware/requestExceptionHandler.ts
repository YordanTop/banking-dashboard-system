import {Request, Response, NextFunction } from "express";
import { HttpRequestException } from "../exception/http_request/httpRequestException";
import { ServerProblemException } from "../exception/http_request/serverProblemException";

/** This middle ware acts like a global handler for the controllers
 * it caches the error massages and than it return it as response message
 */
export const requestExceptionHandler = async (error:HttpRequestException,req:Request, res:Response, next:NextFunction) => {

    //Evolve's it to eternal server error if the status and the message are nullable
    if(error.status == null || error.message == null){

        error = new ServerProblemException("Server does not specified what is the error exception!")

    }

       return res.status(Number(error.status)).send({
            "status": Number(error.status),
            "error-type": error.name,
            "message": error.message
       });

}