'use strict';

const util = require('./util');
const api = require('../network/api');

const layMine = args => {
  const coords = util.parseCoords(args[0]);

  if (!coords.valid) {
    return console.error('error: role-mine requires argument specifying x,y coords');
  }

  return api.layMine(coords.x, coords.y, (err, result) => {
    if (err || result.err) {
      return console.error('error:', err || result.err);
    }

    return console.log('ok:', result);
  });
};

module.exports = layMine;