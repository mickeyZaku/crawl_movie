/**
 * Created by MickeyZaku on 2017/5/29.
 */
let express = require('express');
let Movie = require('./model').Movie;
let app = express();
let path = require('path');
app.use(express.static(path.resolve('node_modules')));
app.set('view engine','ejs');
app.listen(8080);
app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
        res.render('index',{movies});
    })
});

