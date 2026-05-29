import { HttpRequestException } from "./httpRequestException";
import { HttpStatusCode } from "../../utilities/httpStatusCode";

export class AuthenticationException extends HttpRequestException{

    constructor(message: string){
        const status = HttpStatusCode.UNAUTHORIZED;

        super(status,message);
        this.name="AuthenticationException";
    }


}