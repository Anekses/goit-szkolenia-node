const express = require("express");
const Dog = require("../models/dog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();

// require('dotenv').config()
const secret = "goitisawesome";

const auth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (!user || err) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Unauthorized",
        data: "Unauthorized",
      });
    }
    req.user = user;
    // user.roles.includes('ADMIN')
    next();
  })(req, res, next);
};

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.validPassword(password)) {
    return res.json({
      status: "error",
      code: 400,
      data: "Bad request",
      message: "Incorrect login/password",
    });
  }

  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "1h" });

  return res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
});

router.post("/register", async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({
      status: "error",
      code: 409,
      data: "Conflict",
      message: "User already exists!",
    });
  }
  try {
    const newUser = new User({ username, email });
    newUser.setPassword(password);
    await newUser.save();

    res.json({
      status: "success",
      code: 201,
      data: {
        message: "Register complete!",
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/dogs", auth, async (req, res, next) => {
  const dogs = await Dog.find();
  res.json({
    status: "success",
    code: 200,
    data: {
      dogs: dogs || [],
    },
  });
});

module.exports = router;
