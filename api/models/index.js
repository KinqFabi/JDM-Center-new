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

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require('./postModel.js')(sequelize, DataTypes)
db.comments = require('./commentModel.js')(sequelize, DataTypes)
db.users = require('./userModel.js')(sequelize, DataTypes)



db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

// Post - Comment relationship
db.posts.hasMany(db.comments,{
    foreignKey: 'postId',
    as: 'comments'
});


db.comments.belongsTo(db.posts, {
    foreignKey: 'postId',
    as: 'post'
});


// User - Post relationship
db.users.hasMany(db.posts,{
    foreignKey: 'userId',
    as: 'posts'
});

db.posts.belongsTo(db.users, {
    foreignKey: 'userId',
    as: 'user'
});