import mysql from 'mysql';
import * as dotenv from "dotenv";
dotenv.config()

const connection = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME,
    port: 3306
});

export default connection

