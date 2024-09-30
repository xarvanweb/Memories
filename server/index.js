import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


const app = express();
dotenv.config();

//to send our request
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

//online server
const PORT = process.env.PORT || 5000;

//online server
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

        

//local
// const PORT =  5000;

//local mongodb
        // mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
        // .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
        // .catch((error) => console.log(error.message));

        