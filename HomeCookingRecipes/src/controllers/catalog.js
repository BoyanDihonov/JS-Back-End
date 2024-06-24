const { Router } = require('express');
const { getAll, getById } = require('../services/recipe')

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const recipes = await getAll()
    res.render('catalog', { recipes })
})

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id

    const recipe = await getById(id)

    if (!recipe) {
        res.status(404).render('404')
        return;
    }

    recipe.recommendations = recipe.recommendList.length
    recipe.hasUser = res.locals.hasUser
    recipe.isAuthor = req.user?._id == recipe.author.toString();
    recipe.hasRecommended = Boolean(recipe.recommendList.find(r => r.toString() == req.user?._id))

    res.render('details', { recipe })
})

catalogRouter.get('/search', async (req, res) => {
    const { search } = req.query


    res.render('search', { data: { search } })
})
module.exports = { catalogRouter }