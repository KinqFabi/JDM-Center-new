// import controllers review, products
const loginController = require('../controllers/loginController.js')


// router
const router = require('express').Router()


// use routers
router.post('/login', loginController.login)

module.exports = router