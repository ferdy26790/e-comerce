class Auth{
  static authentication(token, next) {
    if(!token) {
      res.status(403).json({
        msg: 'belum login'
      })
    } else {
      jwt.verify(token, 'secure', function(err, decoded) {
        if(!err) {
          next()
        } else {
          res.status(403).json({
            msg: 'invalid token'
          })
        }
      });
    }
  }
}

module.exports = Auth
