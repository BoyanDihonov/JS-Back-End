const { Router } = require('express')
const { getById } = require('../services/animal')
const { isUser } = require('../middlewares/guards')
const { body, validationResult } = require('express-validator')
const { parseError } = require('../util')


const animalRouter = Router()

animalRouter.get('/create', isUser(), (req, res) => {
    res.render('create')
})

animalRouter.post('/create', isUser(),
async (req, res) => {

})

module.exports = { animalRouter }