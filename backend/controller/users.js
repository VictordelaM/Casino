import express from 'express'
import multer from 'multer'
import { User } from '../model/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const userRouter = express.Router()
const mult = multer()

userRouter.post("/register", mult.none(), async (req,res)=>{
    const {username, password, email, emailVerified} = req.body
    if(!username || !password){
        res.sendStatus(403)
        return
    }
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({username, password: hash, email, emailVerified})
    res.json(user)
})