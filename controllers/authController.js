const model = require("../database/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { Model } = require("sequelize");
require("dotenv").config();

function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    model.User.findOne({
        where: {
            email: email,
        }
    }).then(function (result){
        let passwordHas = result.password;
        let chekPassword = bcrypt.compareSync(password, passwordHas);

        if(chekPassword){
            res.json({
                message: "Berhasil Login",
                token: jwt.sign({  id: result.id }, process.env.JWT_KEY_SECRET, {
                    expiresIn: '1h' 
                    
                }),
                user: {
                    result
                }
            });
        }else{
            res.json({
                message : "Gagal Login",
            });
        }
    }).catch(function (error){
        res.json({error: error,
        });
    })
}

module.exports = {
    login
}