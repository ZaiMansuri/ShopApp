const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const users = require('./routes/user');
const subcategoryRoutes = require('./routes/subcatcrud');
const categoryRoutes = require('./routes/category');
const admin = require('./routes/admin');
const inventoryRoutes = require('./routes/inentory');
const filterRoutes = require('./routes/filter');
const CartRoutes = require('./routes/cart');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, 
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then(
    () => { console.log('Database is connected') }, 
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();

app.use(cors());
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use('/public/uploads',express.static('public/uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/cart', CartRoutes);
app.use('/api/admin', admin);
app.use('/api/users', users);
app.use('/subcategory', subcategoryRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/filter', filterRoutes);
app.use('/category', categoryRoutes);
app.get('/', function (req, res) {
    res.send('Reporting. Express Server is on duty');
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
