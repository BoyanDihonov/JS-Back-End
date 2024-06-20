const mongoose = require('mongoose')
require('../models/User')
require('../models/Data') //TODO import real data model

async function configDatabase() {
    //TODO set database name
    const connectionsString = 'mongodb://127.0.0.1:27017/exam-db';
    //replacing "localhost" with "0.0.0.0 because of Node.js version update" 
    //https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017
    await mongoose.connect(connectionsString);

    console.log('Database connected')
}

module.exports = { configDatabase }