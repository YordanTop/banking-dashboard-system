import dotevn from 'dotenv'
import { ExpressConfiguration } from './expressConfig';
import { MongodbConfiguration } from './mongodbConfig';
import { JwtConfiguration } from './jwtConfig.ts';

/* Searches the env file from this project*/
dotevn.config()

/** Configurating the env parameters */
export const serverConfiguration: ExpressConfiguration = {

    host: process.env.EXPRESS_HOST_URL || "none",
    port: Number(process.env.EXPRESS_HOST_PORT) || 0

};

export const databaseConfiguration: MongodbConfiguration = {
    uri: process.env.MONGO_DB_HOST_URI || "none",
    port: Number(process.env.MONGO_DB_HOST_PORT) || 0,
    database: process.env.MONGO_DB_HOST_DATABASE || "none"
}

export const jwtConfiguration: JwtConfiguration = {
    secret: process.env.JWT_AUTH_SECRET_KEY || "none",
    expiration: Number(process.env.JWT_AUTH_DEFAULT_EXPIRATION_DATE) || 360000
}

export const clientUrlCofiguration = process.env.CLIENT_URL || "none"