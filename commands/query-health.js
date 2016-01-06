'use strict';

const api = require('../network/api');

const queryHealth = args => {
  if (!/^\d+$/.test(args[0])) {
    console.error(`error: missing integer argument health`);
    return;
  }

  const health = parseInt(args[0]);

  return api.query((err, result) => {
    if (err || result.err) {
      return console.error('error:', err || result.err);
    }

    const coords = [];

    result.grid.forEach((row, y) => {
      row.forEach((square, x) => {
        if (square.health <= health) {
          coords.push(`${x},${y}`);
        }
      });
    });

    console.log(`${coords.length} cells with health <= ${health}`);

    if (coords.length) {
      console.log(coords.join(' '));
    }
  });
};

module.exports = queryHealth;