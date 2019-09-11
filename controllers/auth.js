let router = require('express').Router()

router.post('/login', (req,res) => {
    res.send('STUB - POST /auth/login')
})

router.post('/login', (req,res) => {
    res.send('STUB - POST /auth/signup')
})

router.get('/current/user', (req, res) => {
    res.send('STUB - Current User Data')
})