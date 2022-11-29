const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    itemID: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    itemName: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    inputDate: {
      type: Date,
      required: [true, 'Please add a text value'],
    },
    expireDate: {
      type: Date,
      required: [true, 'Please add a text value'],
    },
    image: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Item', itemSchema)
