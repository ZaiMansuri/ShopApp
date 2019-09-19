// inventory.route.js

const express = require('express');
const inventoryRoutes = express.Router();

// Require inventory model in our routes module
let Inventory = require('../models/Inventory');

// Defined store route
inventoryRoutes.route('/add').post(function (req, res) {
  let inventory = new Inventory(req.body);
  inventory.save()
    .then(inventory => {
      res.status(200).json({'inventory': 'inventory in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
inventoryRoutes.route('/inventory').get(function (req, res) {
    Inventory.find(function(err, inventory){
    if(err){
      console.log(err);
    }
    else {
      res.json(inventory);
    }
  });
});

// Defined edit route
inventoryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Inventory.findById(id, function (err, inventory){
      res.json(inventory);
  });
});

//  Defined update route
inventoryRoutes.route('/update/:id').post(function (req, res) {
    Inventory.findById(req.params.id, function(err, inventory) {
    if (!inventory)
      res.status(404).send("data is not found");
    else {
        inventory.inventory_id = req.body.inventory_id;
        inventory.quantity = req.body.quantity;
        inventory.date = req.body.date;
        inventory.subcategory_name = req.body.subcategory_name;

        inventory.save().then(inventory => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
inventoryRoutes.route('/delete/:id').get(function (req, res) {
    Inventory.findByIdAndRemove({_id: req.params.id}, function(err, inventory){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = inventoryRoutes;
