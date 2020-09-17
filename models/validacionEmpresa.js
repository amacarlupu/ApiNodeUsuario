const { DataTypes } = require('sequelize');
const { ValidarDB } = require('../database/db');
// const base =require('../database/db');

// console.log('lazzar',base);
const validaDB = ValidarDB.define('empresaDB', {
    URL_EMPRESA: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false
    },
    DESC_EMPRESA: {
        type: DataTypes.STRING(100)
    },
    TYPE_EMPRESA: {
        type: DataTypes.STRING(2)
    },
    CANT_USER: {
        type: DataTypes.STRING(4)
    },
    DIR_EMPRESA: {
        type: DataTypes.STRING(100)
    },
    REF_EMP1: {
        type: DataTypes.STRING(20)
    },
    REF_EMP2: {
        type: DataTypes.STRING(20)
    },
    REF_EMP3: {
        type: DataTypes.STRING(20)
    }, 
    REF_EMP4: {
        type: DataTypes.STRING(20)
    }, 
    REF_EMP5: {
        type: DataTypes.STRING(20)
    }, 
    REF_EMP6: {
        type: DataTypes.STRING(20)
    }, 
    REF_EMP7: {
        type: DataTypes.STRING(20)
    }, 
    REF_EMP8: {
        type: DataTypes.STRING(20)
    }, 
    REF_EMP9: {
        type: DataTypes.STRING(20)
    }
},
    {
        timestamps: false,
        tableName: 'EMPRESAS'
    });

module.exports = validaDB;