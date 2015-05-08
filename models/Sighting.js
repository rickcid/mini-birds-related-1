var mongoose = require('mongoose');
var bird = require('./Bird.js');

var sightingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bird: [bird],
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 }
});


module.exports = mongoose.model('Sighting', sightingSchema);
