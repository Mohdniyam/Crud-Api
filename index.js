 import express from 'express';
 import bodyParser from 'body-parser';

 import userRoutes from './routes/users.js'

 const app = express();
 const PORT = 5000;

 app.use(bodyParser.json());

 app.use('/users', userRoutes)

 app.get('/',(req, res)=>{
    console.log("TEST")
    
    res.send("Hello from HomePage")
 })

 app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:node ${PORT}`);
 });