import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './config/keys.js';
import { profiles } from './routes/profiles.js';
import cors from 'cors';


const app = express()
app.use(express.json())

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('MongoDB is Successfully Connected'))
.catch(err => console.log(err))

app.get('/test', ( _ ,res) =>{
    res.send('Hello World')
})

app.use('/api/profiles', profiles)

const port = 5000 
const callback = () => console.log(`Server is running on port ${port}`)

app.listen(port, callback)
