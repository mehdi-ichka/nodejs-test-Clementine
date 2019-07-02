const db = require('../config/db.config.js');
const Company = db.company;
const User = db.user;
 
// Init data: Companies & Users
exports.init = (req, res) => {	

	User.create({
		firstname: "Jack",
		lastname: "Davis",
		age: 37		
	}).then(jack => {
			let users = [jack];
			
			return User.create({
				firstname: "Mary",
				lastname: "Taylor",
				age: 21
			}).then(mary => {
				users.push(mary);
				return users;
			})
	}).then(users => {
		Company.create({
			code: 'C-123',
			name: 'Company1'
		}).then(c123 => {
			c123.setWorkers(users);
		})
		
		Company.create({
			code: 'C-456',
			name: 'Company2'
		}).then(c456 => {
			c456.setWorkers(users);
		})
	}).then(() => {
		res.send("OK");
	});
};

// Fetch all Companies include Users
exports.findAll = (req, res) => {
	Company.findAll({
		attributes: ['code', 'name'],
		include: [{
			model:User, as: 'Workers',
			attributes: [['firstname', 'name'], 'age'],
			through: {
				attributes: ['companyId', 'userId'],
			}
		  }]
	}).then(companies => {
	   res.send(companies);
	});
};