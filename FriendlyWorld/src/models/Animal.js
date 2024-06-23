const { Schema, model, Types } = require('mongoose');

//TODO replace with data model from exam description

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    years: {
        type: Number,
        required: true,
    },
    kind: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    need: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    donations:
    {
        type: Types.ObjectId,
        required: true,
        default: []
    }
    ,
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
})

const Animal = model('Animal', AnimalSchema);

module.exports = { Animal };