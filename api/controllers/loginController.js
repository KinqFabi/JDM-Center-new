const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { user }  = require("../models");

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

    if(!userToLogin) {
        return res.status(404).send('User not found');
    }

    bcrypt.compare(password, userToLogin.password).then(async (match) => {
        if (!match) res.json({ error: "Wrong Username And Password Combination" });
    
        const accessToken = sign(
          { username: userToLogin.username, id: userToLogin.id },
          "importantsecret"
        );
        res.json({ token: accessToken, username: username, id: userToLogin.id });
      });
};

module.exports = {
    login
    
}