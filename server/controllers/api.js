/**
 * API Controller
 */

'use strict';


var settings = require('../config/env/default');
var db = require('../config/database');
var path = require('path');

var apiShowsByDate = function (req, res) {	
	var date = req.params.date;

	db.sequelize.query("SELECT * FROM shows S, tvlistings T WHERE S.id_listing=T.id AND T.date = :d",
		null, {raw: true}, {d: date})
		.success(function(shows) {
			res.json(shows);
	});
};

var apiPreviousListing = function (req, res) {	
	var date = req.params.date;

	db.sequelize.query("SELECT DATE_FORMAT(T.date,'%Y-%m-%d') as date FROM tvlistings T WHERE T.date < :d ORDER BY DATE(T.date) DESC LIMIT 1;",
		null, {raw: true}, {d: date})
		.success(function(listingDate) {
			res.json(listingDate);
	});
};

var apiNextListing = function (req, res) {	
	var date = req.params.date;
	
	db.sequelize.query("SELECT DATE_FORMAT(T.date,'%Y-%m-%d') as date FROM tvlistings T WHERE T.date > :d LIMIT 1;", 
		null, {raw: true}, {d: date})
		.success(function(listingDate) {
			res.json(listingDate);
	});
};

module.exports = {
  apiShowsByDate: apiShowsByDate,
  apiPreviousListing: apiPreviousListing,
  apiNextListing: apiNextListing,
};
