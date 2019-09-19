const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const Admin = require('../models/Admin');

router.post('/signup', function(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    Admin.findOne({
        username: req.body.username
    }).then(admin => {
        if(admin) {
            return res.status(400).json({
                username: 'Admin name already exists'
            });
        }
        else {
            const avatar = gravatar.url(req.body.username, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const newAdmin = new Admin({
                phone: req.body.phone,
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                avatar
            });
            
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                        if(err) console.error('There was an error', err);
                        else {
                            newAdmin.password = hash;
                            newAdmin
                                .save()
                                .then(admin => {
                                    res.json(admin)
                                }); 
                        }
                    });
                }
            });
        }
    });
});

router.post('/signin', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({username})
        .then(admin => {
            if(!admin) {
                errors.username = 'Admin not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, admin.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                id: admin.id,
                                name: admin.name,
                                avatar: admin.avatar
                            }
                            jwt.sign(payload, 'secret', {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        token: `Bearer ${token}`
                                    });
                                }
                            });
                        }
                        else {
                            errors.password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
});

router.get('/me', passport.authenticate('jwt', { session: true }), (req, res) => {
    return res.json({
        id: req.admin.id,
        name: req.admin.name,
        username: req.admin.email
    },
    
    console.log("--"+res.json)
    );
    
});
router.get('/index',)
module.exports = router;