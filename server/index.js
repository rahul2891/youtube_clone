import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=> {
        console.log("DB Connected")
    }).catch(err=>{
        throw err
    })
}

app.use('/api/users', userRoutes)

app.listen(9900, () => {
    connect()
    console.log("Server running")
})