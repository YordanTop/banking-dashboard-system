import dotevn from 'dotenv'
import EnvConfiguration from './envConfig'

/* Searches the env file from this project*/
dotevn.config()

/** Configurating the env parameters */
const serversConfiguration: EnvConfiguration = {

    express_host_url: process.env.EXPRESS_HOST_URL || "none",
    express_host_port: Number(process.env.EXPRESS_HOST_PORT) || 3000,

};

export default serversConfiguration;