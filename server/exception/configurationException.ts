
/** ConfigurationException is a class that should be used for configuration problems only*/
export class ConfigurationException extends Error{

      constructor(message: string) {
        super(message);
        this.message = message;
        this.name = "ConfigurationException";
      }


}