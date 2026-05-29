
/** ServerConnectionException is a class that should be used for server connection problems only*/
export class ServerConnectionException extends Error{

      constructor(message: string) {
        super(message);
        this.message = "ServerConnectionException";
      }


}