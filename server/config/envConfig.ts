/** 
 * EnvConfiguration is a frame for configuring parameters that should be included
 * in the project's env file! 
 */
interface EnvConfiguration{

    /** Express configuration */
    express_host_url: string,
    express_host_port: number

}

export default EnvConfiguration;