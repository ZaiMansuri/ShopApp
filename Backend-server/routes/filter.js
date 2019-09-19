// filter.route.js

const express = require('express');
const filterRoutes = express.Router();

// Require filter model in our routes module
let Filter = require('../models/filter');

// Defined store route
filterRoutes.route('/add').post(function (req, res) {
  let filter = new Filter(req.body);
  filter.save()
    .then(filter => {
      res.status(200).json({'filter': 'filter in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
filterRoutes.route('/filter').get(function (req, res) {
    Filter.find(function(err, filter){
    if(err){
      console.log(err);
    }
    else {
      res.json(filter);
    }
  });
});

// Defined edit route
filterRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Filter.findById(id, function (err, filter){
      res.json(filter);
  });
});

//  Defined update route
filterRoutes.route('/update/:id').post(function (req, res) {
    Filter.findById(req.params.id, function(err, filter) {
    if (!filter)
      res.status(404).send("data is not found");
    else {
        filter.filter_id = req.body.filter_id;
        filter.price = req.body.price;
        filter.detail = req.body.detail;
        filter.detail = req.body.detail;
        filter.color = req.body.color;
        filter.model = req.body.model;
        filter.subcat_id = req.body.subcat_id;

        filter.save().then(filter => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
filterRoutes.route('/delete/:id').get(function (req, res) {
    Filter.findByIdAndRemove({_id: req.params.id}, function(err, filter){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = filterRoutes;
