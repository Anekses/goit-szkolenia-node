const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const uriDb = process.env.DB_HOST;

const connection = mongoose.connect(uriDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.then(() => {
  console.log("connected to MongoDB");
});

const dogs = [];

// const Some = new Schema({})

// Some.pre('validate', (next) => {

// })

const Dog = mongoose.model("Dog", {
  name: {
    type: String,
    minLength: 2,
    maxLength: 20,
    required: [true, "Name is required"],
    // index: 1,
    // unique: true,
  },
  age: {
    type: Number,
    min: 30,
    max: 700,
  },
  owner: {
    name: String,
    favorites: [String],
    birthday: Date,
    hasMoreDogs: Boolean,
  },
});

/* GET dogs listing. */
router.get("/", function (req, res, next) {
  const payload = {
    id: 1,
    name: "Dawid",
    year: 2002,
  };
  const secret = "nodejs8";
  const token = jwt.sign(payload, secret);

  const verify = jwt.verify(`${token}`, secret);
  const decode = jwt.decode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRhd2lkIiwieWVhciI6MjAwMiwiaWF0IjoxNjg2NTk0MjMzfQ.YlFiM07HTh0r2KAjVM3GZHz7ERuVqlOsU7rvQaJ0Ew8"
  );

  res.json({
    token,
    verify,
    decode,
  });
  // res.json(dogs);
});

router.get("/add", function (req, res, next) {
  const dog = new Dog({
    name: "Tadek",
    age: 50,
    owner: {
      name: "Kasia",
    },
  });

  // Dog.create(dog)
  // Dog.find()
  // Dog.findById()

  // const { id } = req.params
  // if (id > 3000) {
  //   ...
  // } else {
  //   ,,,
  // }

  const result = dog.save().then((response) => {
    console.log("Pies zapisany do bazy", response);

    res.json(response);
  });
});

// const resp = {
//   accessToken: "123",
//   refreshToken: "435",
//   roles: [Role.Admin, Role.ModeratorNews, Role.SuperUser],
// };

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  const dog = dogs.filter((us) => us.id === id);
  res.status(200).json(user);
});

module.exports = router;
