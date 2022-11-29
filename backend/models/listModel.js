const mongoose = require('mongoose')

const listSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    listSize: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    itemID: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('List', listSchema)
