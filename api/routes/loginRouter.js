// import controllers review, products
const loginController = require('../controllers/loginController.js')
const { validateToken } = require('../middlewares/AuthMiddleware.js')

// router
const router = require('express').Router()


// use routers
router.post('/login', loginController.login )
router.get('/logout', loginController.logout)
router.get('/auth', validateToken, loginController.auth)

module.exports = router