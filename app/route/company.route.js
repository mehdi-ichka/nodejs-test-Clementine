module.exports = function(app) {
 
    const companies = require('../controller/company.controller.js');
 
    // Init data: add Companies & Users
    app.get('/api/companies/init', companies.init);
 
    // Retrieve all Companies (include Users)
    app.get('/api/companies/all', companies.findAll);
}