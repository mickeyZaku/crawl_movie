/**
 * Created by MickeyZaku on 2017/5/29.
 */
let read = require('./read').read;
let write = require('./write').write;
let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let debug = require('debug')('crawl:main');
let Movie = require('../model').Movie;
function start() {
    async.waterfall([
        function (cb) {
          Movie.remove({},cb)
        },
        function (data,cb) {
            read(url, cb);
        },
        function (data,cb) {
            write(data,cb);
        }
    ],function (err,res) {
        debug('完成');
    })
}
start();