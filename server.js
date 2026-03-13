import express from "express";
import dotenv from "dotenv";
import auth from "./src/Routes/Auth.routes.js";
import Notes from "./src/Routes/Notes.routes.js";
import Conection from "./src/Config/Mongodb.config.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
const allowedOrigins = [
  "http://localhost:5173",
  "https://yasir-khan-legent.github.io"
];
app.use(cors({
 origin: function(origin, callback){
    // allow requests with no origin (like mobile apps or curl)
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error('Not allowed by CORS'), false);
    }
    return callback(null, true);
  },
    // origin:'https://yasir-khan-legent.github.io/Advance-Note-App-Frontend',
    // origin: process.env.FRONTEND_URL,
    credentials:true,
}))
Conection()


app.use('/auth' ,auth )
app.use('/notes' ,Notes )





app.listen(process.env.PORT, () => {
  console.log("Server Is Running 👍");
});
