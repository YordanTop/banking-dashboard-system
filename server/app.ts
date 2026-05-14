import express  from "express";

import userRouter from "./router/userRouter";
import authRouter from "./router/authRouter";

import serversConfiguration from "./config/config";


const app = express();

app.use(express.json());

app.use('api/auth', authRouter);




/** Starting the server */
app.listen(serversConfiguration.express_host_port ,() =>{
    console.log(`Server is running at port ${ serversConfiguration.express_host_port }`)
  }
);