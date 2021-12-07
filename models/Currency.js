const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    prices: {
      type: Array,
      required: true
    },
    allTimeHigh: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
});

module.exports = Currency = mongoose.model('currency', CurrencySchema);