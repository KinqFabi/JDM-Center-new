const router = require('express').Router()


// use routers
router.get('/setCookie/:name', (req, res) => {
    res.cookie('name', req.params.name, { maxAge: 900000, httpOnly: true })
    res.send('cookie set')
})

module.exports = router