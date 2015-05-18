var express = require('express');
var router = express.Router();
var item = require('../models/item');


//get agenda items
router.get('/', function(req, res, next) {
    item.find(function (err, item) {
        if (err) return next(err);
        res.json(item);
        console.log('yes');
    });
});


//post new item
router.post('/', function(req, res, next) {
    item.create(req.body, function (err, item) {
        if (err) return next(err);
        res.json(item);
    });
});

/* DELETE /item/:id */
router.delete('/:id', function(req, res, next) {
    item.findByIdAndRemove(req.params.id, req.body, function (err, item) {
        if (err) return next(err);
        res.json(item);
    });
});

module.exports = router;