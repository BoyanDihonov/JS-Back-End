const { Recipe } = require('../models/Recipe')

async function getAll() {
    return Recipe.find().lean()
}

async function searchRecipe(search){

}

async function getByAuthorId(authorId) {
    return Recipe.find({ author: authorId }).lean()
}

async function getById(id) {
    return Recipe.findById(id).lean()
}

async function create(data, authorId) {

    const record = new Recipe({
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        description: data.description,
        image: data.image,
        author: authorId
    });

    await record.save()

    return record

}

async function update(id, data, userId) {
    const record = await Recipe.findById(id);

    if (record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    record.title = data.title,
        record.ingredients = data.ingredients,
        record.instructions = data.instructions,
        record.description = data.description,
        record.image = data.image,


        await record.save();

    return record
}


async function addRecommendation(recipeId, userId) {
    const record = await Recipe.findById(recipeId);

    if (!record) {
        throw new ReferenceError('Record not found' + recipeId)
    }

    if (record.author.toString() == userId) {
        throw new Error('You can not recommend your own recipe')
    }

    if (record.recommendList.find(r => r.toString() == userId)) {
        throw new Error('You\'ve already recommended this recipe!')

    }
    record.recommendList.push(userId)

    await record.save();
    return record
}


async function deleteById(id, userId) {
    const record = await Recipe.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    await Recipe.findByIdAndDelete(id)
}

module.exports = {
    getAll,
    update,
    create,
    getById,
    deleteById,
    addRecommendation,
    getByAuthorId,
    searchRecipe

}