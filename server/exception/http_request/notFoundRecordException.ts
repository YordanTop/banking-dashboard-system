import { HttpRequestException } from "./httpRequestException";
import { HttpStatusCode } from "../../utilities/httpStatusCode";

export class NotFoundRecordException extends HttpRequestException{

    constructor(message: string){
        const status:HttpStatusCode = HttpStatusCode.NOT_FOUND;

        super(status,message);
        this.name="NotFoundRecordException";
    }


}