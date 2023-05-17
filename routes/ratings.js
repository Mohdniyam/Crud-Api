import express from 'express';
import Rating from '../models/UserRating.js'

const router = express.Router();




router.get("/get-rating", async (req, res) => {
    try {
      const ratings = await Rating.find();
      res.json(ratings);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error detected");
    }
  });


  router.post('/rating', async (req, res) => {
    try{
        const {name, rating, price} = req.body;
        const newRating = new Rating({name, rating, price});
        await newRating.save();
        res.status(201).json(newRating);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server error");

    }
})

  export default router;