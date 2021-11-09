const User = require("../Models/user");
const passport = require("passport");

exports.signUp = function (req, res, next) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      return next(err);
    }

    res.redirect("/");
  });
};

exports.Login = function (req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  });
};
