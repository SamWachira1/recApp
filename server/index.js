import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './config/keys.js';
import { profileRoutes } from './routes/profiles.js';
import { authRoutes } from './routes/auth.js';
import cors from 'cors';

const app = express();

// CORS configuration
app.use(cors())
app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB is Successfully Connected'))
  .catch(err => console.log(err));

app.use('/api/profiles', profileRoutes);
app.use('/api/auth', authRoutes);

const port = 5000;
const callback = () => console.log(`Server is running on port ${port}`);

app.listen(port, callback);
