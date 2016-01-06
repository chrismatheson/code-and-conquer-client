'use strict';

const util = require('./util');
const api = require('../network/api');

const spy = args => {
  if (args.length !== 2) {
    return console.error('error: role-spy requires 2 arguments: team name followed by coords');
  }

  const coords = util.parseCoords(args[1]);

  if (!coords.valid) {
    return console.error(`error: invalid coords ${args[1]}`);
  }

  return api.spy(args[0], coords.x, coords.y, (err, result) => {
    if (err || result.err) {
      return console.error('error:', err || result.err);
    }

    return console.log('ok:', result);
  });
};

module.exports = spy;