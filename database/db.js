const Sequelize = require('sequelize');
const config= require('../config/config'); 
const db = {};
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

// const usuario = require('../models/usuario');


// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('Gcxy135z7f', 'Gcxy135z7f', 'n7PElkWbSa',
//   {
//     host: 'remotemysql.com',
//     dialect: 'mysql',
//     logging: false

//   }
// );

// // Establecer instancia
// const sequelize = new Sequelize(
//   databaseLazzar.database,
//   databaseLazzar.username,
//   databaseLazzar.password,
//   {
//     host: databaseLazzar.host,
//     dialect: databaseLazzar.dialect,
//     logging:databaseLazzar.logging,
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   }
// );


// Extraer información de la base de datos en un arreglo
const databases = Object.keys(config.databases);

// Recorrer el arreglo y crear una instancia por cada DB en config.js
for(let i=0; i< databases.length; ++i){
  let databaseTemp = databases[i];
  let dbRuta=config.databases[databaseTemp];

  // Almacenar los valores de conexion en el objeto db
  db[databaseTemp]=new Sequelize( dbRuta.database, dbRuta.username, dbRuta.password, dbRuta);

}



// fs
//     .readdirSync(path.join(__dirname,'../models'))
//     .filter(file =>
//         (file.indexOf('.') !== 0) &&
//         (file !== basename) &&
//         (file.slice(-3) === '.js'))
//     .forEach(file => {
//       console.log('file',file);
//       console.log('antes de enviar',db.databaseLazzar);
//       const model = require(path.join(__dirname, '../models', file))(db.databaseLazzar, Sequelize.DataTypes);
//       console.log('===========================');
//       console.log('modelo',model);
//       db[model.usuario] = model;
//     });





// Verificar coneccion a la base de datos
// async function autenticacion() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

// }

// autenticacion();


// Añadir al objeto db
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// Object.keys(db).forEach(usuarios => {
//   if (db[usuario].associate) {
//       db[usuario].associate(db);
//   }
// });

// console.log('Que exporo',db);


module.exports = db;