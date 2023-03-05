const db = require('../models')

// model
const Comment = db.reviews

// functions

//1. Add Review

const addComment = async (req, res) => {

    const id = req.params.id

    let data = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    }

    const comment = await Comment.create(data)
    res.status(200).send(comment)

}

// 2. Get All Reviews

const getAllComments = async (req, res) => {

    const comments = await Comment.findAll({})
    res.status(200).send(comments)

}

module.exports = {
    addComment,
    getAllComments
}