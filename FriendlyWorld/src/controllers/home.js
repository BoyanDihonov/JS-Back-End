const { Router } = require('express');
const { login } = require('../services/User');
const { createToken } = require('../services/jwt');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {

    res.render('home');
});

module.exports = { homeRouter }