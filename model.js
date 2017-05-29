/**
 * Created by MickeyZaku on 2017/5/29.
 */
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crawl_movie');
let MovieSchema = mongoose.Schema({
    name: String,
    url: String
});
let Movie = mongoose.model('Movies',MovieSchema);
exports.Movie = Movie;