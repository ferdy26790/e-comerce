const bcrypt = require('bcrypt')
const salt = 10
const jwt = require('jsonwebtoken')
const getDecode = require('../helpers/decode')
const userModel = require('../models/user')

class User{
  static register(req, res) {
    if(!req.body.password) {
      res.status(422).json({
        msg:"empty password"
      })
    }
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      if(!err) {
        let newUser = new userModel({
          name: req.body.name,
          email: req.body.email,
          password: hash
        })
        newUser.save()
        .then((user) => {
          res.status(200).json({
            user: user
          })
        }).catch((err) => {
          if(err.errmsg) {
            res.status(409).json({
              msg:err.errmsg.split(':')[2]
            })
          } else {
            if(err.errors.name) {
              res.status(409).json({
                msg:err.errors.name.message
              })
            } else if(err.errors.email) {
              res.status(409).json({
                msg:err.errors.email.message
              })
            }
          }
        })
      } else {
        console.log(err)
      }
    })
  }

  static login(req, res) {
    userModel.findOne({
      email: req.body.email
    })
    .then((user) => {
      if(user) {
        bcrypt.compare(req.body.password, user.password, function(err, response) {
          if(response) {
            let payload = jwt.sign({
              user
            }, 'secure')
            res.status(200).json({
              token: payload
            })
          } else {
            res.status(401).json({
              msg: 'password salah!'
            })
          }
        })
      } else {
        res.status(204).json({
          msg: 'email tidak terdaftar'
        })
      }
    }).catch((err) => {
      res.status(500)
    })
  }

  static getSelf(req, res) {
    getDecode(req.headers.token)
    .then((decoded) => {
      res.status(200).json({
        data: decoded
      })
    }).catch((err) => {
      res.status(401).json({
        msg: 'expired token'
      })
    })
  }
}

module.exports = User
