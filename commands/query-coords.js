'use strict';

const util = require('./util');
const api = require('../network/api');

const verifyCoords = args => {
  for (let i = 0; i < args.length; i++) {
    const coords = util.parseCoords(args[i]);

    if (!coords.valid) {
      console.error(`error: invalid coord ${args[i]}`);
      return false;
    }
  }

  return true;
};

const queryCoords = args => {
  if (!verifyCoords(args)) {
    return;
  }

  return api.query((err, result) => {
    if (err || result.err) {
      return console.error('error:', err || result.err);
    }

    args.forEach(arg => {
      const coords = util.parseCoords(arg);

      try {
        const square = result.grid[coords.y][coords.x];
        square.coords = arg;
        console.log(square);
      } catch (err) {
        return console.error(`error: square ${coords.x},${coords.y} not found`);
      }
    });
  });
};

module.exports = queryCoords;