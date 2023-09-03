const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  imageUrls: [
    {
      type: String,
      required: true,
    },
  ],
});

// export schema

const imageCollection = mongoose.model("imageCollection", Schema);
module.exports = imageCollection;
