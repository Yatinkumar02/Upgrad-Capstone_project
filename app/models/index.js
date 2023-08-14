const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.artists = require("./artist.model");
db.genres = require("./genre.model");
db.movies = require("./movie.model");
db.users = require("./user.model");

module.exports = db;
