/**
 * Created by MickeyZaku on 2017/5/29.
 */
let Movie = require('../model').Movie;
let async = require('async');
let debug = require('debug')('crawl:write');
exports.write = function (movies, callback) {
    Movie.create(movies,callback);
    debug(`写入`)
};
