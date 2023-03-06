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

db.posts = require("../models/postModel.js")(sequelize, DataTypes);
db.comments = require("../models/commentModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

db.posts.hasMany(db.comments, {
  foreignKey: "postId",
  as: "comments",
});

db.comments.belongsTo(db.posts, {
  foreignKey: "postId",
  as: "post",
});

const Post = db.posts;
const Comment = db.comments;

// reference to the Post model

// creating a post

const createPost = async (req, res) => {
  let postValues = {
    postContent: req.body.postContent,
    postTitle: req.body.postTitle,
    username: req.body.username,
    description: req.body.description,
  };

  const post = await Post.create(postValues);
  res.status(200).send(post);
  console.log(post);
};

// get all posts
const getAllPosts = async (req, res) => {
  let posts = await Post.findAll({});
  res.status(200).send(posts);
};

// get a post by id
const getPostById = async (req, res) => {
  let id = req.params.id;
  let post = await Post.findOne({ where: { id: id } });
  res.status(200).send(post);
};

// update a post by id
const updatePostById = async (req, res) => {
  let id = req.params.id;
  let post = await Post.update(postValues, { where: { id: id } });
  res.status(200).send(post);
};

// delete a post by id
const deletePost = async (req, res) => {
  let id = req.params.id;
  await Post.destroy({ where: { id: id } });
  res.status(200).send("post deleted");
};

const getPostComments = async (req, res) => {
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
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePost,
  getPostComments,
  upload,
};
