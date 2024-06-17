const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');
const { configHbs } = require('./config/configHbs');
const { createToken, verifyToken } = require('./services/jwt');

const { register, login } = require('./services/user');



async function start() {
    const app = express();
    
    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log('Server started http://localhost:3000');
        
    });
}

start();