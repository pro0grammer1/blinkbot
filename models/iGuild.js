const { Schema, model } = require("mongoose");

const IGuild = new Schema({
  id: { type: String },
  disabled: { type: Array, default: [] },
  xp: {
    type: Number,
    default: '0'
  },
 level: {
    type: Number,
    default: '0'
  },
});
module.exports = model('IGuild', IGuild);