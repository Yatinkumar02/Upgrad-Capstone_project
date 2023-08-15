const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.artists = require("./artist.model")(mongoose);
db.genres = require("./genre.model")(mongoose);
db.movies = require("./movie.model")(mongoose);
db.users = require("./user.model")(mongoose);

module.exports = db;
