const router = require('express').Router();
const { Op } = require("sequelize");
const { sequelize } = require('../../database/db');

// Database Connection
require('../../database/db');

// importa modelo
const User = require('../../models/usuario');

const PwdValidator = require('./userController');

// Obtener todos los registos
router.get('/', async (req, res) => {
    console.log(User);
    // Recuperar todos los  valores
    const user = await User.findAll();
    res.json(user);
});


// Obtener registros por ID
router.get('/profile/:id', async (req, res) => {
    const user = await User.findAll({
        // attributes: ['DES_USR', 'PSW_USR'],
            where: {
                CDG_USR: {
                    [Op.eq]: req.params.id
                }
            }
        })
        .then(user => {

            // Si no hace match devuelve un objeto vacio, pasa por el if
            // y muestra un json con el error
            if(Object.entries(user).length === 0){
                res.json({
                    error:{
                        message:'No existe el usuario'
                    }
                });
            }

            res.json(user);
            // console.log(req.params);

        })
        .catch(err => {
           return err;

        });
});



// LogIn
router.post('/login', async (req, res)=>{
    const user = await User.findAll(
    //     {
    //      attributes: ['CDG_USR','PSW_USR']
    //     // where:{
    //     //     [Op.and]:[{DES_USR:req.body.username},{PSW_USR:req.body.password}],
    //     // }
    // }
    )
    .then(user=>{

        PwdValidator(req.body.password, user[0].dataValues.PSW_USR);

        // console.log(PwdValidator);

        if(PwdValidator){
            res.json({
                id_user:user[0].dataValues.CDG_USR,
                status:'valido'
            });
            // return console.log('valido');
        }else{
            res.json({
                // status:Invalid,
                error:{
                    message:'contraseña inválida',
                    status:'invalido'
                }
            });
        }
        
        
    })
    .catch(err=>{
        return err;
    });

});

// LogOut
router.get('/logout', async (req, res)=>{
    sequelize.close();
    console.log('Sesion cerrada');
});


// router.post('/singin', async )

module.exports = router;