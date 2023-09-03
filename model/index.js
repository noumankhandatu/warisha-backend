const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// export schema

const AuthModel = mongoose.model("AuthModel", Schema);
module.exports = AuthModel;
