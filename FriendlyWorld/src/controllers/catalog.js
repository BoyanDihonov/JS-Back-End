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

    animal.votes = animal.donateList.length
    animal.hasUser = res.locals.hasUser
    animal.isAuthor = req.user?._id == animal.author.toString()
    animal.hasDonated = Boolean(animal.donations.find(d => d.toString() == req.user?._id))

    res.render('details', { animal })
})

module.exports = { catalogRouter }