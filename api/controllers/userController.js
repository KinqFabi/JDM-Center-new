const dbCofing = require("../config/dbConfig.js");
const multer = require("multer");
const path = require("path");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbCofing.DB, dbCofing.USER, dbCofing.PASSWORD, {
  host: dbCofing.HOST,
  dialect: dbCofing.dialect,
  operatorsAliases: false,

  pool: {
    max: dbCofing.pool.max,
    min: dbCofing.pool.min,
    acquire: dbCofing.pool.acquire,
    idle: dbCofing.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/userModel")(sequelize, DataTypes);
db.posts = require("../models/postModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// User - User relationship
db.users.hasMany(db.posts, {
  foreignKey: "userId",
  as: "posts",
});

db.posts.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});
const User = db.users;

/***********************************************************/

// creating a user

const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  // async weg gemamacht!!!

  const { password } = req.body;
  bcrypt.hash(password, 10).then(async (hash) => {
    let userValues = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      userPicture: req.body.userPicture,
      password: hash,
    };
    const user = await User.create(userValues); // await weg gemamacht!!!
    res.status(200).send(user);
    console.log(user);
  });
};

// get all users
const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).send(users);
};

// get a user by id
const getUserById = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

// update a user by id
const updateUserById = async (req, res) => {
  let id = req.params.id;
  let user = await User.update(userValues, { where: { id: id } });
  res.status(200).send(user);
};

// delete a user by id
const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).send("user deleted");
};

const getUserPosts = async (req, res) => {
  const id = req.params.id;

  const data = await Product.findOne({
    include: [
      {
        model: Comment,
        as: "comment",
      },
    ],
    where: { id: id },
  });

  res.status(200).send(data);
};

// 8. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUser,
  getUserPosts,
  upload,
};
