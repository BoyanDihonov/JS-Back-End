const mongoose = require('mongoose')
require('../models/User')
require('../models/Recipe') 


async function configDatabase() {
    const connectionsString = 'mongodb://127.0.0.1:27017/HomeCookingRecipes';
    //replacing "localhost" with "127.0.0.1 because of Node.js version update" 
    //https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017
    await mongoose.connect(connectionsString);

    console.log('Database connected')
}

module.exports = { configDatabase }