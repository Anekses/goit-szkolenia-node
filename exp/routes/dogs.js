const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

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
  res.json(dogs);
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

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  const dog = dogs.filter((us) => us.id === id);
  res.status(200).json(user);
});

module.exports = router;
