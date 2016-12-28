//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://<username>@localhost:5432/tunr_models');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Artist = sequelize.import("./artist");
module.exports.models = {
	Artist: Artist
};