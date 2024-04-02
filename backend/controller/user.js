import express from 'express'
import multer from 'multer'
import { User } from '../model/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import db from '../utils/db.js'

export const userRouter = express.Router()
const mult = multer()

userRouter.post("/register", mult.none(), async (req,res)=>{
    const {username, password, email, emailVerified} = req.body
    if(!username || !password){
        res.sendStatus(403)
        return
    }
    const salt = await bcrypt.genSalt()
    console.log("test:", req.body)
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({username, password: hash, email, emailVerified})
    res.json(user)
})

userRouter.post("/login",mult.none(), async(req,res)=>{
    console.log("test")
    const {username, password} = req.body
    if(!username || !password){
        res.sendStatus(403)
        return 
    }
    const user = await User.findOne({username}).lean()
    if(user === null){
        res.status(401).send("falsche Eingabe")
        return
    }
    const passwordMatches = await bcrypt.compare(password, user.password)
    if (!passwordMatches){
        res.status(401).send("falsches Passwort")
        return
    }
    const token = jwt.sign({username}, process.env.JWT_SECRET)
    console.log("hat geklappt")
    res.cookie("token", token)
    res.json({status: 'ok', token: token})
})

userRouter.use(express.json());

userRouter.get('/getData', async(req,res)=>{
    console.log("test")
    const username = 'haha'
    const accounts = await db.collection("users").findOne();
    console.log(accounts)
    res.json(accounts)
})


userRouter.get("/geheimnis",  async (req, res)=>{
    const authorization = req.headers.authorization
    const [_authType, token] = authorization.split(" ")
    try{
        const {username} = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({username})
        console.log({user})
        res.end()
    } catch(e){
        console.error(e)
        res.sendStatus(403)
    }
})

userRouter.get("/:name",  async (req, res)=>{
    const username = req.params.name
    const user = await User.findOne({username},{password: 0})
    res.json(user)
})
