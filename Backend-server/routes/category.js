// category.route.js

const express = require('express');
const categoryRoutes = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');
// Require Category model in our routes module
let Category = require('../models/Category');

// Defined store route
categoryRoutes.route('/add',passport.authenticate('jwt', { session: true })).post(function (req, res) {
  let category = new Category(req.body);
  category.save()
    .then(category => {
      res.status(200).json({'category': 'category in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
categoryRoutes.route('/category').get(function (req, res) {
    Category.find(function(err, category){
    if(err){
      console.log(err);
    }
    else {
      res.json(category);
    }
  });
});

// Defined edit route
categoryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Category.findById(id, function (err, category){
      res.json(category);
  });
});

//  Defined update route
categoryRoutes.route('/update/:id').post(function (req, res) {
    Category.findById(req.params.id, function(err, category) {
    if (!category)
      res.status(404).send("data is not found");
    else {
        category.category_id = req.body.category_id;
        category.name = req.body.name;
        category.detail = req.body.detail;

        category.save().then(category => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
categoryRoutes.route('/delete/:id').get(function (req, res) {
    Category.findByIdAndRemove({_id: req.params.id}, function(err, category){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = categoryRoutes;
