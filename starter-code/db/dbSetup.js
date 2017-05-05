var DB = require("../models");

DB.sequelize.sync({force: true}).then(function(){
	console.log("seeding");
  process.exit();
});