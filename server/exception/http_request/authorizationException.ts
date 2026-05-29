import { HttpRequestException } from "./httpRequestException";
import { HttpStatusCode } from "../../utilities/httpStatusCode";

export class AuthorizationException extends HttpRequestException{

    constructor(message: string){
        const status = HttpStatusCode.FORBIDDEN;

        super(status,message);
        this.name="AuthorizationException";
    }


}