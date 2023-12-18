const express = require("express");
const { UserModel } = require("../model/User.model");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userRouter = express.Router();


userRouter.post("/register", async (req, res) => {
  try {
    const {email,pass,name,age} = new UserModel(req.body);
    await user.save();
    res.status(200).send({ msg: "New user has been registered" });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email, pass });
    
    if(user){
        const token = jwt.sign({ course: 'backend' }, 'masai');
        res.status(200).send({"msg":"Login Successful","token":token})
    }else{
        res.status(200).send({"msg":"Wrong Credentials"})
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = {
  userRouter,
};
