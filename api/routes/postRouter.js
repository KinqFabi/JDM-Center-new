// import controllers review, products
const postController = require('../controllers/postController.js')
const commentController = require('../controllers/commentController')


// router
const router = require('express').Router()


// use routers
router.post('/createPost', postController.createPost)

router.get('/allPosts', postController.getAllPosts)



// Review Url and Controller

router.get('/allComments', commentController.getAllComments)
router.post('/addComment/:id', commentController.addComment)

// get product Reviews
router.get('/getPostComments/:id', postController.getPostComments)




// Products router
router.get('/:id', postController.getPostById)

router.put('/:id', postController.updatePostById)

router.delete('/:id', postController.deletePost)

module.exports = router