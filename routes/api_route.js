const { Router } = require('express')
const router=Router();

const routeUsuario=require('./user/user');
const routeEmpresaValida=require('./empresa/empresa');

// Enviar a user.js cuando tengan la direccion '/api/user'
router.use('/user',routeUsuario);
router.use('/empresa',routeEmpresaValida);


module.exports=router;


