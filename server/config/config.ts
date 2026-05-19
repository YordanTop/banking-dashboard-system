import dotevn from 'dotenv'
import { ExpressConfiguration } from './expressConfig';
import { MongodbConfiguration } from './mongodbConfig';
import { JwtConfiguration } from './jwtConfig';

/* Searches the env file from this project*/
dotevn.config()

/** Configurating the env parameters */
export const serversConfiguration: ExpressConfiguration = {

    url: process.env.EXPRESS_HOST_URL || "none",
    port: Number(process.env.EXPRESS_HOST_PORT) || 3000

};

export const databaseConfiguration: MongodbConfiguration = {
    uri: process.env.MONGO_DB_HOST_URI || "none",
    port: Number(process.env.MONGO_DB_HOST_PORT) || 27017,
    database: process.env.MONGO_DB_HOST_DATABASE || "none"
}

export const jwtConfiguration: JwtConfiguration = {
    secret: process.env.JSON_SECRET_KEY || "none",
    expiration: Number(process.env.JSON_DEFAULT_EXPIRATION_DATE) || 3000
}