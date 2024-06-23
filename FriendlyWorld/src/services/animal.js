const { Animal } = require('../models/Animal')

//TODO replace with real data service according to exam description

async function getAll() {
    return Animal.find().lean()
}

async function getByAuthorId(authorId) {
    return Animal.find({ author: authorId }).lean()

}

async function getById(id) {
    return Animal.findById(id).lean()
}

async function create(data, authorId) {
    const record = new Animal({
        name: data.name,
        years: data.years,
        kind: data.kind,
        image: data.image,
        need: data.need,
        location: data.location,
        description: data.description,
        donations: data.donations,

        author: authorId
    });

    await record.save()

    return record

}

async function update(id, data, userId) {
    const record = await Animal.findById(id);

    if (record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    //TODO replace with real properties
    record.prop = data.prop

    await record.save();

    return record
}

async function deleteById(id, userId) {
    const record = await Animal.findById(id);

    if (record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    await Animal.findByIdAndDelete(id)
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    getByAuthorId
}