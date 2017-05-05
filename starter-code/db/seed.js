var DB = require("../models").models;

var artistCreate = function() {
	return DB.Artist.create({
    name: 'Not right yet',
    photoUrl: 'www.zombo.com',
    nationality: 'Zombie',
    instrument: 'Brains',
    home_address: 'Atlanta'
  });
};

let managerCreate = function() {
	return DB.Manager.create({
		name: 'Ricky Bobby',
		email: 'rickybobby@shakeandbake.com',
		office_number: '18009999999',
		cell_phone_number: '3038675309'
	});
};

artistCreate()
.then(function() {
	managerCreate()
	.then(()=>{
		process.exit();
	});
});