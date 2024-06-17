const mongoose = require('mongoose')
require('../models/User')
require('../models/Stone')
 
async function configDatabase() {
    const connectionsString = 'mongodb://0.0.0.0:27017/EarthTreasureVaul';
    //replacing "localhost" with "0.0.0.0 because of Node.js version update" 
    //https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017
    await mongoose.connect(connectionsString);

    console.log('Database connected')
}

module.exports = { configDatabase }