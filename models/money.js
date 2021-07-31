const {Schema, model} = require('mongoose');

const Money = new Schema({
  id: String,
  loangiven: {
    type: String,
    default: '0'
  },
  loantaken: {
    type: String,
    default: '0'
  },
  house: {
    type: String,
    default: '0'
  },
  wallet: {
    type: String,
    default: '0'
  },
  work: {
    type: String,
    default: "none"
  },
  workhours: {
    type: String,
    default: 0
  },
  success: {
    type: String,
    default: 0
  },
  fails: {
    type: String,
    default: 0
  }
});
module.exports = model('Money', Money);