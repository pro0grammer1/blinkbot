const {Schema, model} = require('mongoose');

const Game = new Schema({
  id: String,
  rgwon: {
    type: String,
    default: '0'
  },
  rlost: {
    type: String,
    default: '0'
  },
  rstreak: {
    type: String,
    default: '0'
  },
  isPlayingrps: {
    type: Boolean,
    default: false
  }
});
module.exports = model('Game', Game);