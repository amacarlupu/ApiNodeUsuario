const express = require('express');
const mysql = require('mysql');

const app = express();

// Crear conexion
const dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lazzar_prueba'
});

// Iniciar coneccion
dbconnection.connect((err) => {
    if (err){ 
        throw err;
    }
    console.log('Conectado a mysql');
});



// Select 
app.get('/users', (req, res)=>{
    let sql="SELECT * FROM m_usuari";
    let query=dbconnection.query(sql, (err, results)=>{
        if(err)throw err;
        // console.log(results);
        res.send(results);
    });
});

// select por ID
app.get('/users/:id', (req, res)=>{
    let id = req.params.id;
    let sql='SELECT * FROM m_usuari WHERE CDG_USR=?';
    let query=dbconnection.query(sql, id, (err, results)=>{
        if(err) throw err;
        res.send(results);
    });
});

// Exportar app
module.exports = app;
