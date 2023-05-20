const mongoose = require('mongoose')
const Schema = mongoose.Schema

const excursionSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    picture: {
      type: String
    },
    date: {
      type: Date
    },
    price: {
      type: Number
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Excursion', excursionSchema)
