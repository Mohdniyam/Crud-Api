// import module

import mongoose from "mongoose";



//Define schema for users Rating Collection

const userRatingSchema = new mongoose.Schema ({
  name: { type: String, required: true},
  rating: { type: Number, required: true},
  price: { type: Number, required: true}
});

export default mongoose.model ('Rating', userRatingSchema)