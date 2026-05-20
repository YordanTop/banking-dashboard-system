import express  from "express";
import mongoose from "mongoose";

//import userRouter from "./router/userRouter";
import authRouter from "./router/authRouter";


import { serversConfiguration } from "./config/config";
import {databaseConfiguration} from "./config/config";

const app = express();

app.use(express.json());


const databaseURL = `${databaseConfiguration.uri}:${databaseConfiguration.port}/${databaseConfiguration.database}`;


try {
  await mongoose.connect(databaseURL);
  console.log("Connection with the mongodb database was establish!");

  /** Starting the server */
  app.listen(serversConfiguration.port ,() =>{
      console.log(`Server is running at port ${ serversConfiguration.port }`)
    }
  );

} catch (error) {
  
  console.log("Connection error: ");
  console.log(error);
}


app.use('/api/auth', authRouter);
//app.use('/api/user', userRouter);
