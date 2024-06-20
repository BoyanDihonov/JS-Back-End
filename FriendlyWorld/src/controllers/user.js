const { Router } = require('express');
const { login } = require('../services/User');
const { createToken } = require('../services/jwt');

const result = await login('John', '123456')
const token = createToken(result)
res.cookie('token', token)