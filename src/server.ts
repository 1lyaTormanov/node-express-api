import express from 'express';
import * as dotenv from 'dotenv'
import {userRoutes} from "./api/user/app";
import cors from 'cors';

dotenv.config()

const appPort = process.env.APPLICATION_PORT
const app = express();

app.use(cors())
app.use('/users', userRoutes);

app.listen(appPort, ()=> {
    console.log(`working on port ${appPort}`)
})
