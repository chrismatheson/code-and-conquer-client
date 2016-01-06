'use strict';

const parseCoords = coords => {
  if (/^\d+\,\d+$/.test(coords)) {
    return {
      valid: true,
      x: parseInt(coords.split(',')[0]),
      y: parseInt(coords.split(',')[1])
    };
  }

  return {
    valid: false
  };
};

module.exports = {
  parseCoords
};