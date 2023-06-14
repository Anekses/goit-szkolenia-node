const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("./../models/user");

// require('dotenv').config()
const secret = "goitisawesome";

const ExtractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: secret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new Strategy(params, function (payload, done) {
    User.find({ _id: payload.id })
      .then(([user]) => {
        if (!user) {
          return done(new Error("User is not here anymore"));
        }
        return done(null, user);
      })
      .catch((err) => done(err));
  })
);
