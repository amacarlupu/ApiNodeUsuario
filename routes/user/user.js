const router = require('express').Router();
const { Op, InvalidConnectionError } = require("sequelize");
const { sequelize } = require('../../database/db');


// importa modelo
const User = require('../../models/usuario');
const { validator } = require('sequelize/types/lib/utils/validator-extras');

// Obtener todos los registos
router.get('/', async (req, res) => {
    // Recuperar todos los  valores
    const user = await User.findAll();
    res.json(user);
});


// Obtener registros por ID
router.get('/profile/:id', async (req, res) => {
    const user = await User.findAll({
        attributes: ['DES_USR', 'PSW_USR'],
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
            console.log(req.params);

        })
        .catch(err => {
           return err;

        });
});


// LogIn
router.post('/login', async (req, res)=>{
    const user = await User.findAll({
        where:{
            [Op.and]:[{DES_USR:req.body.username},{PSW_USR:req.body.password}],
        }
    })
    .then(user=>{

        if(Object.entries(user).length === 0){
            res.json({
                status:Invalid,
                error:{
                    message:'Usuario o contraseña inválidos'
                }
            });
        }

        res.json({
            status:valid,
            codigo:user.CDG_USR
        });
    })
    .catch(err=>{
        throw err;
    });

});

// LogOut
router.get('/logout', async (req, res)=>{
    sequelize.close();
    console.log('Sesion cerrada');
});

module.exports = router;