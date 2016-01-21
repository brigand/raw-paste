var Promise = require('es6-promise').Promise;
var parseUrl = require('url').parse;
var request = require('./request');
var resolveUrl = require('./resolve-url');

function getRawPaste(url, callback) {
  return resolveUrl(url)
    .then(function(url) {
      return request(url)
    })
    .then(function(res) {
      return res.text.trim() + '\n';
    });
}

module.exports = getRawPaste;

