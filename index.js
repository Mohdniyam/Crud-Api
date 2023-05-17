import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';

import userRoutes from './routes/users.js'

import userRat from './routes/ratings.js'

import userProduct from './routes/product.js'




const app = express();
const PORT = 5000;

mongoose.connect("mongodb+srv://haqniyam:mul123456@cluster0.tyi4v0l.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () =>
  console.log("Connected to MongoDB Atlas database")
);

 app.use(bodyParser.json());

 app.use('/users', userRoutes)

 app.use('/users2', userRat)

 app.use('/product', userProduct)






 app.get('/',(req, res)=>{
    console.log("TEST")
    
    res.send("Hello from HomePage")
 })

 app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:node ${PORT}`);
 });
