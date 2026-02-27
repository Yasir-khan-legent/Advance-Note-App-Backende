import express from 'express'
import dotenv from 'dotenv'
import auth from './src/Routes/Auth.routes.js'
import Notes from './src/Routes/Notes.routes.js'
import Conection from './src/Config/Mongodb.config.js'
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
<<<<<<< HEAD
    origin:'https://yasir-khan-legent.github.io/Advance-Note-App-Frontend',
=======
    origin: process.env.FRONTEND_URL,
>>>>>>> 1e92e49 (Save local changes before pulling)
    credentials:true,
}))
Conection()


app.use('/auth' ,auth )
app.use('/notes' ,Notes )





app.listen(process.env.PORT,()=>{
    console.log('Server Is Running 👍')
})
