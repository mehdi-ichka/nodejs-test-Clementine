module.exports = (sequelize, Sequelize) => {
	const Company = sequelize.define('company', {
	  code: {
		  type: Sequelize.STRING
	  },
	  name: {
		  type: Sequelize.STRING
	  }
	});
	
	return Company;
}