import { HttpRequestException } from "./httpRequestException";
import { HttpStatusCode } from "../../utilities/httpStatusCode";

export class RecordConflictException extends HttpRequestException{

    constructor(message: string){
        const status:HttpStatusCode = HttpStatusCode.CONFLICT;

        super(status,message);
        this.name="RecordConflictException";
    }


}