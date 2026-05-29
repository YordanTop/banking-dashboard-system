import { HttpRequestException } from "./httpRequestException";
import { HttpStatusCode } from "../../utilities/httpStatusCode";

export class BadBodyRequestException extends HttpRequestException{

    constructor(message: string){
        const status:HttpStatusCode = HttpStatusCode.BAD_REQUEST;

        super(status,message);
        this.name="BadBodyRequestException";
    }


}