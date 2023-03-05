// import controllers review, products
const userController = require('../controllers/userController.js')


// router
const router = require('express').Router()


// use routers
router.post('/createUser', userController.createUser)

router.get('/allUsers', userController.getAllUsers)



// Review Url and Controller


// get product Reviews
router.get('/getUserPosts/:id', userController.getUserPosts)




// Products router
router.get('/:id', userController.getUserById)

router.put('/:id', userController.updateUserById)

router.delete('/:id', userController.deleteUser)

module.exports = router