import express from 'express'
import cors from 'cors'
import {config} from "dotenv" 
import mongoose from 'mongoose'
import { userRouter } from './controller/user.js'

const PORT = 3000
config({path:'./.env'})
const app = express()

await mongoose.connect(process.env.MONGODB_URI)

app.use(cors({origin: "http://localhost:5173"}))
app.use("/user", userRouter)


app.listen(PORT)
console.log(`listen http://localhost:${PORT}`)