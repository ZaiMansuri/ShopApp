
const path = require("path");
const multer = require("multer");
const express = require('express');
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
const User = require('../models/User');
const Cart = require('../models/Cart');

const CartRoutes = express.Router();


// Defined store route
CartRoutes.route('/addcart').post(function (req, res) {
  let cart = new Cart(req.body);
  cart.save()
    .then(cart => {
      res.status(200).json({'cart': 'cart in added successfully'});
      res.json(req.body);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
CartRoutes.route('/cart').get(function (req, res) {
    Cart.find(function(err, cart){
    if(err){
      console.log(err);
    }
    else {
      res.json(cart);
    }
  });
});

// Defined edit route
CartRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Cart.findById(id, function (err, cart){
      res.json(cart);
  });
});

//  Defined update route
CartRoutes.route('/update/:id').post(function (req, res) {
    Cart.findById(req.params.id, function(err, cart) {
    if (!cart)
      res.status(404).send("data is not found");
    else {
        cart.inventory_id = req.body.inventory_id;
        cart.quantity = req.body.quantity;
        cart.date = req.body.date;
        cart.subcategory_name = req.body.subcategory_name;

        cart.save().then(cart => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
CartRoutes.route('/delete/:id').get(function (req, res) {
    Cart.findByIdAndRemove({_id: req.params.id}, function(err, cart){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = CartRoutes;

  CartRoutes.post("/addcart", (req, res, next) => {
    User.findById(req.body.userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({
            message: "User not found"
          });
        }
        const cartOrder = new Cart({
          _id: mongoose.Types.ObjectId(),
          pimage:req.body.pimage,
          sub_name: req.body.sub_name,
          Description: req.body.Description,
          price: req.body.price,
          quantity: req.body.quantity,
          userid: req.body.userId
        });
        return cartOrder.save();
      })
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "cart stored",
          createdOrder: {
            _id: result._id,
            user: result.user,
            pimage:result.pimage,
            sub_name: result.sub_name,
            Description: result.Description,
            price: result.price,
            quantity: result.quantity
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).send("unable to save to db").json({
          error: err
        });
      });
  });

  
module.exports = CartRoutes;
