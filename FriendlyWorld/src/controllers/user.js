const { Router } = require('express');
const { body, validationResult } = require('express-validator')
const { login, register } = require('../services/User');
const { createToken } = require('../services/jwt');
const { isGuest } = require('../middlewares/guards')
const { parseError } = require('../util')

const userRouter = Router()

userRouter.get('/login', isGuest(), (req, res) => {
    res.render('login')
})

userRouter.post('/login', isGuest(),
    body('email').trim(),
    body('password').trim(),
    async (req, res) => {
        const { email, password } = req.body

        try {
            const result = await login(email, password)
            const token = createToken(result)
            res.cookie('token', token)

            res.redirect('/')
        } catch (err) {
            res.render('login', { data: { email }, errors: parseError(err).errors })
        }
    }
)

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register')
})

userRouter.post('/register', isGuest(),
    body('email').trim().isLength({ min: 10 }).isEmail().withMessage('email is too short (minimum is 10 char)'),
    body('password').trim().isLength({ min: 4 }).withMessage('Password is too short (minimum is 4 char)'),
    body('repass').trim().custom((value, { req }) => { return value == req.body.password }).withMessage('Passwords don\'t match'),
    async (req, res) => {
        const { email, password } = req.body

        try {
            const validation = validationResult(req)

            if (validation.errors.length) {
                throw validation.errors
            }
            const result = await register(email, password)
            const token = createToken(result)
            res.cookie('token', token)

            res.redirect('/')
        } catch (err) {
            res.render('register', { data: { email }, errors: parseError(err).errors })

        }
    }
)

userRouter.get('/logout', (req, res) => {
    res.clearCookie('token')
    redirect('/')
})

module.exports = { userRouter }