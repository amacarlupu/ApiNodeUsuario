const database = {
    databases:{

        databaseLazzar: {
            username: 'Gcxy135z7f',
            password: 'n7PElkWbSa',
            database: 'Gcxy135z7f',
            host: 'remotemysql.com',
            dialect: 'mysql',
            logging: false,
            pool: {
                      max: 5,
                      min: 0,
                      acquire: 30000,
                      idle: 10000
                    }
        },
    
        ValidarDB: {
            username: 'ugqfDQPGHS',
            password: '1TpZHlDTLj',
            database: 'ugqfDQPGHS',
            host: 'remotemysql.com',
            dialect: 'mysql',
            logging: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
              }
        }
    }

    
};

module.exports = database;