// Import required modules

import mongoose from "mongoose";

import validator from "validator";

// Authentication Schema

const accountSchema =  new mongoose.Schema({
    name: {type:String, required:[true, "Please provide a valid Name"]},
    email: {type:String, required:[true, "Please provide a valid"], unique:true, validator:isEmailValidator},
    password: {type:String, required:[true, "Please provide a valid Password"], minLength:8},
    confirmPassword: {type:String, required:[true, "Please provide a valid Confirm Password"], minLength:8}
});

const AuthUser = mongoose.model("AuthUser", accountSchema);

export default AuthUser;