import express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser"

//import userRouter from "./router/userRouter";
import authRouter from "./router/authRouter";

import {databaseConfiguration, clientUrlCofiguration, serverConfiguration } from "./config/config";
import { requestExceptionHandler } from "./middleware/requestExceptionHandler";
import { ServerEnvPropertiesHandler } from "./config/handler/serverEnvPropertiesHandler";
import { JwtEnvPropertiesHandler } from "./config/handler/jwtEnvPropertiesHandler";
import { DatabaseEnvPropertiesHandler } from "./config/handler/databaseEnvPropertiesHandler";



const app = express();

  app.use(express.json());
  app.use(cookieParser());

  app.use(cors({
    origin: clientUrlCofiguration,
    credentials:true
  }))

app.use('/api/auth', authRouter);

app.use(requestExceptionHandler);


const databaseURL = `${databaseConfiguration.uri}:${databaseConfiguration.port}/${databaseConfiguration.database}`;


try {

  ServerEnvPropertiesHandler();
  JwtEnvPropertiesHandler();
  DatabaseEnvPropertiesHandler();

  await mongoose.connect(databaseURL);
  console.log("Connection with the mongodb database was establish!");

  /** Starting the server */
  app.listen(serverConfiguration.port,serverConfiguration.host ,() =>{
      console.log(`Server is running at port ${ serverConfiguration.port }`)
    }
  );

} catch (error) {
  
  console.log("Server error: ");
  
  if(error instanceof Error){
    console.error(error);
  }

}

//app.use('/api/user', userRouter);
