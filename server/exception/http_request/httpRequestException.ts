import { HttpStatusCode } from "../../utilities/httpStatusCode";

/** HttpRequestException is a parent class from which the other exception should inherated*/
export abstract class HttpRequestException extends Error{

      constructor(public status:HttpStatusCode, message: string) {
        super(message);
      }


}