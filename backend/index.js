import express from 'express'
import cors from 'cors'
import {config} from "dotenv" 
import mongoose from 'mongoose'
import { userRouter } from './controller/users.js'

const PORT = 3005
config({path:'./.env'})
const app = express()

console.log(process.env.MONGODB_URI)


await mongoose.connect(process.env.MONGODB_URI)

app.use(cors())
app.use("/user", userRouter)

app.listen(PORT)
console.log(`http://localhost:${PORT}`)