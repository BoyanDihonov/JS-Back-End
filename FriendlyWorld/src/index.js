const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');
const { configHbs } = require('./config/configHbs');
const { createToken, verifyToken } = require('./services/jwt');

const { register, login } = require('./services/User');


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

// async function test() {
//     try {
//         const result = await register('peter@abv.bg', 'Peter', '123');
//         const token = createToken(result)
//         ole.log(token)
//     } catch (err) {
//         console.log('Caught error')
//         console.error(err.message)
//     }
// }

// async function test(){
//     try{
//        const result = await create('boqn@abv.bg', '123')
//        const token = createToken(result)
// //        console.log(token)
// //     }catch (err){
//         console.log ('Caught error')
//         console.error(err.message)
//     }

//  Read Record
// const result = await api.getById(dataId);
// console.log(result)

// }

// // Create Record

//     const result = await api.getById(dataId);
//     console.log(result)
// // Edit Record

// // const dataId = '6671b1bb0d24bec13e99a69e';
// const formData ={
//     name:'Blue',
//     years:24,
//     kind:'forest',
//     image: '/static/images/animal4.jpg',
//     need:'Medicine',
//     location:'Ruse',
//     description:'something',
//     donations: 'something else'

// }

// Delete Record

// // const dataId = '6671b1bb0d24bec13e99a69e';
// // const userId = '6671abebe30e1a1c81e127d8';

// // await application.deleteById(dataId,userId);


// //Add Vote

// // const userId = '6671abebe30e1a1c81e127d8';

// const result = await api.addVote(dataId, userId)

