// category.route.js
const path = require("path");
const multer = require("multer");
const express = require('express');
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
const subcategoryRoutes = express.Router();


// Require Category model in our routes module
let SubCategory = require('../models/AdminCRUD');

//define multer with inser subcategory
const storage2 = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||  file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Init Upload
const upload2 = multer({
  storage: storage2,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

subcategoryRoutes.route('/add').post(upload2.single('pimage'),function (req, res, next) {
  console.log(req.body);
  console.log(req.file);

  const subcategory = new SubCategory
    ({

      subcat_no: req.body.subcat_no,
      sub_name: req.body.sub_name,
      description: req.body.description,
      price: req.body.price,
      pimage: 'public/uploads/'+req.file.filename,
      category_name: req.body.category_name,
      qty: req.body.qty
    });
    
 
  subcategory.save()
    .then(subcategory => {
     
      res.status(200).json({ 'subcategory': 'category in added successfully' });

      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});



//Defined get data(index or listing) route
subcategoryRoutes.route('/subcategory').get(function (req, res) {

  SubCategory.find(function (err, subcategoryes) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(subcategoryes);
    }
  });
  
});



// Defined edit route
subcategoryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  SubCategory.findById(id, function (err, subcategory) {
    res.json(subcategory);
  });
});


//  Defined update route
subcategoryRoutes.route('/update/:id').post(function (req, res) {
  SubCategory.findById(req.params.id, function (err, subcategory) {
    if (!subcategory)
      res.status(404).send("data is not found"); 
    else {
      subcategory.subcat_no = req.body.subcat_no;
      subcategory.sub_name = req.body.sub_name;
      subcategory.description = req.body.description;
      subcategory.price = req.body.price;
      //===here is the error of filename undefind
      subcategory.pimage = req.body.pimage ||  req.file.filename ;

      subcategory.category_name = req.body.category_name;
      subcategory.qty= req.body.qty;

      subcategory.save().then(subcategory => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route
subcategoryRoutes.route('/delete/:id').get(function (req, res) {
  SubCategory.findByIdAndRemove({ _id: req.params.id }, function (err, subcategory) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});


subcategoryRoutes.route('/search/:id&subcategory').get(function (req, res) {
  let id = req.params.id;
  let subcategory = req.body.sub_name;
  SubCategory.findById(id, subcategory, function (err, subcategory) {
    res.json(subcategory);
  });
});



module.exports = subcategoryRoutes;
