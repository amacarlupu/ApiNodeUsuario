const router = require('express').Router();
const { Op } = require("sequelize");

// Database Connection
require('../../database/db');

// importa modelo
const empresaValida = require('../../models/validacionEmpresa');

router.get('/', async (req, res)=>{
    const data = await empresaValida.findAll();
    res.json(data);
});


router.get('/:id', async (req, res)=>{
    const url = req.params.id;
    console.log(url);
    const data = await empresaValida.findByPk(url);
    res.json(data);
});


module.exports=router;
