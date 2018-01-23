const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce');
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required:true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User
