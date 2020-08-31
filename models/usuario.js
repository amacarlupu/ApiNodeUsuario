const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const usuario = sequelize.define('usuario',{
        CDG_USR:{
            type: DataTypes.CHAR(30),
            primaryKey: true,
            allowNull: false   
        },
        DES_USR:{
            type: DataTypes.CHAR(100)   
        },
        NIV_USR:{
            type: DataTypes.CHAR(1)
        },
        DIR_USR:{
            type: DataTypes.CHAR(100)
        },
        PSW_USR:{
            type: DataTypes.CHAR(30)
        },
        SWT_USR:{
            type: DataTypes.DECIMAL(1,0)
        },
        PTO_VTA:{
            type: DataTypes.CHAR(3)
        },
        USR_RED:{
            type: DataTypes.CHAR(30)
        },
        USR_EMAIL:{
            type: DataTypes.CHAR(100)
        },
        CDG_USU:{
            type: DataTypes.CHAR(10)
        },
        FEC_USU:{
            type: DataTypes.DATE
        },
        HOR_USU:{
            type: DataTypes.CHAR(8)
        },
        ALM_DEFAULT:{
            type: DataTypes.CHAR(3)
        },
        SWT_OPALM:{
            type: DataTypes.DECIMAL(1,0)
        },
        SWT_AGUI:{
            type: DataTypes.DECIMAL(1,0)
        },
        SWT_PERF:{
            type: DataTypes.DECIMAL(1,0),
            defaultValue: 0
        },
        SWT_VCOST:{
            type: DataTypes.DECIMAL(1,0)
        }
    
    },
    {
        timestamps: false,
        tableName:'m_usuari'
    });

module.exports=usuario;