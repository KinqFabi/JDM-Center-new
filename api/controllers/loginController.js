const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { user }  = require("../models");
const cookieParser = require('cookie-parser');
require('express')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = require('express').Router();
const { validateToken } = require('../middlewares/AuthMiddleware.js');

const dbCofing = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
    dbCofing.DB,
    dbCofing.USER,
    dbCofing.PASSWORD, {
        host: dbCofing.HOST,
        dialect: dbCofing.dialect,
        operatorsAliases: false,

    pool: {
        max: dbCofing.pool.max,
        min: dbCofing.pool.min,
        acquire: dbCofing.pool.acquire,
        idle: dbCofing.pool.idle
    }
});
    
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/userModel')(sequelize, DataTypes)

const login = async (req, res) => {
    const { username, password } = req.body;

    const userToLogin = await db.users.findOne({ where: { username: username } });
    const token = jwt.sign(userToLogin.username , process.env.MY_SECRET);
    //return res.cookie("TEST COOKIE", "Test Cookies", { maxAge: 900000, httpOnly: true })
    //return res.cookie("accessToken", token, {maxAge: 999999,httpOnly: true}).status(200);
    //return res.status(200).send(token);
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .send(token);

 /*  const userToLogin = await db.users.findOne({ where: { username: username } });
    if(!userToLogin) {
        return res.status(404).send('User not found');
    }   
    else {
        bcrypt.compare(password, userToLogin.password).then(async (match) => {
            if (!match) res.json({ error: "Wrong Username And Password Combination" });
            const token = jwt.sign(userToLogin.username , process.env.MY_SECRET);
            res.cookie("accessToken", token, {
              httpOnly: true
            }).status(200)
            .json({ message: "Login Successful", user: userToLogin });
          //  res.json({ message: "Login Successful", user: userToLogin });
          });      
    */


}; 

  
const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out.");
};

const auth = (req, res) => {
  res.status(200).json(req.user);
};


module.exports = {
    login,
    logout,
    auth
};