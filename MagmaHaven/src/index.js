const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');
const { configHbs } = require('./config/configHbs');

const { register, login } = require('./services/User');
const { createToken, verifyToken } = require('./services/jwt');


start();

async function start() {
    const app = express();
    
    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log('Server started http://localhost:3000');
        // test()
    });
}

// async function test(){
//     try{
//        const result = await login('boqn@abv.bg', '123')
//        const token = createToken(result)
//        console.log(token)
//     }catch (err){
//         console.log ('Caught error')
//         console.error(err.message)
//     }

// }

