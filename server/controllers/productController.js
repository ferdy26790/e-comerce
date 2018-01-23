const jwt = require('jsonwebtoken')
const productModel = require('../models/product')
const getDecode = require('../helpers/decode')

class Product{
  static addProduct(req, res) {
    getDecode(req.headers.token)
    .then((decoded) => {
      if(decoded.user.role === 'admin') {
        let newProduct = new productModel({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
          image: req.body.image
        })
        newProduct.save()
        .then((product) => {
          res.status(200).json({
            product: product
          })
        }).catch((err) => {
          if(err.errors.name) {
            res.status(409).json({
              msg: err.errors.name.message
            })
          } else if(err.errors.description) {
            res.status(409).json({
              msg: err.errors.description.message
            })
          } else if(err.errors.price) {
            res.status(409).json({
              msg: err.errors.price.message
            })
          } else if(err.errors.image) {
            res.status(409).json({
              msg: err.errors.image.message
            })
          } else if(err.errors.category) {
            res.status(409).json({
              msg: err.errors.category.message
            })
          }
        })
      } else {
        res.status(401).json({
          msg: "admin only"
        })
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  static getAllProducts(req, res) {
    productModel.find()
    .then((products) => {
      res.status(200).json({
        products: products
      })
    }).catch((err) => {
      res.status(500)
    })
  }
}

module.exports = Product
