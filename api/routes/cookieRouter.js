const router = require('express').Router()


// use routers
router.get('/setCookie/:name', (req, res) => {
    res.cookie(req.params.name, "Test Cookies", { maxAge: 900000, httpOnly: true })
    res.send('cookie set')
})


module.exports = router