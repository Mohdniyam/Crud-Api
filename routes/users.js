import express from 'express';
import User from '../models/user.js';

const router = express.Router();


// import { v4 as uuidv4 } from 'uuid';


let users  = []


router.get("/", async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

router.post('/', async (req, res) => {
    try{
        const {firstName, lastName, age} = req.body;
        const newUser = new User({firstName, lastName, age});
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server error");

    }
})
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).send("User not found");
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByIdAndDelete(id).exec();
  
      if (!user) {
        return us.status(404).send({ error: 'Document not found' });
      }
  
      res.send({ message: 'Document deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Server error' });
    }
  });


router.patch('/:id', async (req, res)=>{
    try{
        const id = req.params.id;
    const {firstName, lastName, age} = req.body;
    const user = await User.findOneAndUpdate({_id:id},{firstName,lastName,age});

    res.send(`user with the id ${id} has been updated`)
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' });
      }
    
})

router.get('/', async (req, res) => {
  try {
    const user = User.aggregate([
      {
        $match:{}
      },

   {
    $group:{

    }
   }
   
    ])
  }
  catch(error){
    res.status(404).json({
      status: "failed",

    })

  }
})


export default router;