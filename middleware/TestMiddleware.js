var exports = module.exports = {
  default: function(req, res, next) {
    console.log("Test middleware");
    next();
  }
}
