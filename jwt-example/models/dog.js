const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: Number,
  owner: {
    name: String,
  },
});

const Dog = mongoose.model("dog", dogSchema);

module.exports = Dog;
