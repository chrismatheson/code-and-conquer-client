'use strict';

const http = require('http');
const url = require('url');
const config = require('../config');

const parseJSON = data => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return { err };
  }
};

const getJson = (actionUrl, callback) => {
  const handleResponse = response => {
    let data = '';
    response.on('data', chunk => data += chunk);
    response.on('end', () => callback(null, parseJSON(data)));
  };

  const request = http.get(config.server + actionUrl, handleResponse);

  request.on('error', callback);
};

const postJson = (actionUrl, data, callback) => {
  const handleResponse = response => {
    let data = '';

    if (response.statusCode !== 200) {
      return callback(null, { err: { statusCode: response.statusCode } });
    }

    response.on('data', chunk => data += chunk);
    response.on('end', () => callback(null, parseJSON(data)));
  };

  const options = {
    host: url.parse(config.server).hostname,
    path: actionUrl,
    port: 9000,
    method: 'POST'
  };

  data = data || {};

  const request = http.request(options, handleResponse);

  request.on('error', callback);

  request.write(JSON.stringify(data));
  request.end();
};

module.exports = {
  getJson,
  postJson
};