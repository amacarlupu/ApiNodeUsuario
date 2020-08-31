const router = require('express').Router();

const apiUserRouter=require('./user/user');

// Enviar a user.js cuando tengan la direccion '/api/user'
router.use('/user',apiUserRouter);


module.exports=router;


