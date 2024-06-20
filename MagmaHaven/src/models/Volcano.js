const { Schema, model, Types } = require('mongoose');

//TODO replace with data model from exam description

const volcanoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    elevation: {
        type: Number,
        required: true,
    },
    lastEruption: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    typeVolcano: {
        type: String,
        enum: ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield'],
        required: true,
    },
    description: {
        type: [Types.ObjectId],
        required: true,
        default: []
    },
    voteList: {
        type: String,
        required: true,
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
})

const Volcano = model('Volcano', volcanoSchema);

module.exports = { Volcano };