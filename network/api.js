'use strict';

const http = require('./http');
const config = require('../config');

const attack = (x, y, callback) => {
  http.postJson('/game/attack', { key: config.key, x: x, y: y }, callback);
};

const defend = (x, y, callback) => {
  http.postJson('/game/defend', { key: config.key, x: x, y: y }, callback);
};

const query = (callback) => {
  http.getJson('/game/query', callback);
};

const layMine = (x, y, callback) => {
  http.postJson('/game/role/mine', { key: config.key, x: x, y: y }, callback);
};

const cloak = (cells, callback) => {
  http.postJson('/game/role/cloak', { key: config.key, cells: cells }, callback);
};

const spy = (teamName, x, y, callback) => {
  http.postJson('/game/role/spy', { key: config.key, teamName: teamName, x: x, y: y }, callback);
};

module.exports = {
  attack,
  defend,
  query,
  layMine,
  cloak,
  spy
};