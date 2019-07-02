const env = {
  database: 'testdb',
  username: 'root',
  password: 'xxx',
  host: 'localhost',
  dialect: 'mysql',
  insecureAuth: 'true',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;