const { Router } = require('express')
const { getAll } = require('../services/animal')

const catalogRouter = Router()

catalogRouter.get('/catalog', async (req, res) => {
    const animals = await getAll()
    res.render('catalog', { animals })
})

module.exports = { catalogRouter }