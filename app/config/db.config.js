const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.company = require('../model/company.model.js')(sequelize, Sequelize);
db.user = require('../model/user.model.js')(sequelize, Sequelize);

db.company.belongsToMany(db.user, { as: 'Workers', through: 'worker_tasks', foreignKey: 'companyId', otherKey: 'userId'});
db.user.belongsToMany(db.company, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId', otherKey: 'companyId'});

module.exports = db;