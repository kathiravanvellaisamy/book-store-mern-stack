const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      requires: true,
    },
    author: {
      type: String,
      requires: true,
    },
    publishYear: {
      type: Number,
      requires: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
