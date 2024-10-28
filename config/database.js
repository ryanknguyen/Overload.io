const { Sequelize } = require('sequelize');

// init sequelize with postgres db credentials
const sequelize = new Sequelize('overload_io', 'postgres', 'Ryanknguyen#1', {
    host: 'localhost',
    dialect: 'postgres'
});

// export initialized sequelize instance
module.exports = sequelize;


