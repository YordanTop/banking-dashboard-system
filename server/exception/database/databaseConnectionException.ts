
/** DatabaseConnectionException is a class that should be used for database connection problems only*/
export class DatabaseConnectionException extends Error{

      constructor(message: string) {
        super(message);
        this.message = "DatabaseConnectionException";
      }


}