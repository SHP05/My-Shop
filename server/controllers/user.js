const express = require("express");
const CustomerModel = require("../model/customer");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const Secret = process.env.SECRET;

const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await CustomerModel.findOne({ email });

    if(user){
      const ans = await bcrypt.compare(password, user.password);
      if (ans){
        const token = JWT.sign({ email: user, userId: user._id }, Secret, {
          expiresIn: "24h",
        });
        return res.status(200).json({
            message: "User Loged in Successfully",
            userData:{token,
              email,
              name: user.name}
          })
      } else {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    }
    else{
      res.status(401).json({message:"Invalid Credentials"});
    };
};

const SignUp = async (req, res) => {
  const { name, password, email } = req.body;

  let hashPass;
  await bcrypt.hash(password, 10).then((hash) => {
    hashPass = hash;
  });

  try {
    CustomerModel.findOne({ email })
      .then((user) => {

        if (user) {
          return res.status(401).json({ message: "User Already Exist" });
        }

        CustomerModel.create({
          name,
          password: hashPass,
          email,
        })
          .then((result) => {
            return res.status(201).json({ message: "User Created Successfully", result });
          })
          .catch((err) => {
            res.json({ err });
          });
      })
      .catch((err) => {
        res.json({ err });
      });
  } catch (err) {
    return res.status(500).json({ message: "User NOt created Try again", err });
  }
};

module.exports = { Login, SignUp };
