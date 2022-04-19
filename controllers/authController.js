const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: 'succes',
            user,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }

};

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const tempUser = await User.findOne({email: email}, (err, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, same) => {
                    if (same) {
                        //User Session
                        req.session.userID=user._id;
                        res.status(200).redirect('/');
                    }
                })
            }
        }
        )}
    catch
        (error)
        {
            res.status(400).json({
                status: 'fail',
                error,
            });
        }

    }
    ;