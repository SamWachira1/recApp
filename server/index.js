import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express()

const port = 5000 
const callback = () => console.log(`Server is running on port ${port}`)

app.listen(port, callback)
