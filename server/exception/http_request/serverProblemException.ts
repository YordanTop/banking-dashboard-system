import { HttpStatusCode } from "../../utilities/httpStatusCode";

import { HttpRequestException } from "./httpRequestException";

export class ServerProblemException extends HttpRequestException{

    constructor(message: string){
        const status = HttpStatusCode.INTERNAL_SERVER_ERROR;

        super(status,message);
        this.name="ServerProblemException";
    }


}