'use strict';

const api = require('../network/api');

const queryOwner = args => {
  if (typeof args[0] !== 'string') {
    console.error(`error: missing argument owner`);
    return;
  }

  return api.query((err, result) => {
    if (err || result.err) {
      return console.error('error:', err || result.err);
    }

    const coords = [];

    result.grid.forEach((row, y) => {
      row.forEach((square, x) => {
        if (square.owner.name.toLowerCase() === args[0].toLowerCase()) {
          coords.push(`${x},${y}`);
        }
      });
    });

    console.log(`${coords.length} cells owned by "${args[0]}"`);

    if (coords.length) {
      console.log(coords.join(' '));
    }
  });
};

module.exports = queryOwner;