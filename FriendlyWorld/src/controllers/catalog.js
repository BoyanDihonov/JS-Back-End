const { Router } = require('express')
const { getAll, getById } = require('../services/animal')

const catalogRouter = Router()

catalogRouter.get('/catalog', async (req, res) => {
    const animals = await getAll()
    res.render('catalog', { animals })
})

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id

    const animal = await getById(id)

    if (!animal) {
        res.status(404).render('404')
        return
    }

     

    res.render('details', { animal })
})

module.exports = { catalogRouter }