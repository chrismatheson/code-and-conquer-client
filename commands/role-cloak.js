'use strict';

const util = require('./util');
const api = require('../network/api');

const cloak = args => {
  if (args.length === 0) {
    return console.error('error: role-cloak requires up to three coord arguments');
  }

  const cells = [];

  for (let i = 0; i < args.length; i++) {
    const coords = util.parseCoords(args[i]);

    if (!coords.valid) {
      return console.error(`error: invalid coords ${args[i]}`);
    }

    cells.push({ x: coords.x, y: coords.y });
  }

  return api.cloak(cells, (err, result) => {
    if (err || result.err) {
      return console.error('error:', err || result.err);
    }

    return console.log('ok:', result);
  });
};

module.exports = cloak;