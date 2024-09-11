import express from 'express';
import { profiles } from './routes/profiles.js';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express()
app.use(express.json())

app.get('/test', ( _ ,res) =>{
    res.send('Hello World')
})

app.use('/api/profiles', profiles)

const port = 5000 
const callback = () => console.log(`Server is running on port ${port}`)

app.listen(port, callback)
