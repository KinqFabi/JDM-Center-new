const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { user }  = require("../models");
const cookieParser = require('cookie-parser');
require('express')
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
   // const { username, password } = req.body;

   
    let {token} = req.cookies;

    // make sure token exists
   /* if (!token){
        return console.log("no token");
    }*/

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 900000),
    };
    token = "test";

    res
    .status(200)
    .cookie('token', token, options )
    .json({success: true, token})
  /*  const userToLogin = await db.users.findOne({ where: { username: username } });

    if(!userToLogin) {
        return res.status(404).send('User not found');
    }

    const token = "123"
    res.cookie("token", token, {
        httpOnly: true,
        secure: true
    });


    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(userToLogin);

    bcrypt.compare(password, userToLogin.password).then(async (match) => {
        if (!match) res.json({ error: "Wrong Username And Password Combination" });
        const token = jwt.sign(userToLogin.toJSON() , process.env.MY_SECRET, {expiresIn: '1h'});
        res.cookie("token", token, {
            httpOnly: true,
            secure: true
            });
        res.json({ message: "Login Successful", user: userToLogin });
      });*/



};  


module.exports = {
    login
    
}