'use strict';

const util = require('./util');
const api = require('../network/api');

const attack = args => {
  const coords = util.parseCoords(args[0]);

  if (!coords.valid) {
    return console.error('error: attack requires argument specifying x,y coords');
  }

  return api.attack(coords.x, coords.y, (err, result) => {
    if (err || result.err) {
      return console.error('error:', err || result.err);
    }

    return console.log('ok:', result);
  });
};

module.exports = attack;