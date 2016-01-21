var Promise = require('es6-promise').Promise;
var parseUrl = require('url').parse;
var request = require('./request');
var resolveUrl = require('./resolve-url');
var log = require('./log');

function getRawPaste(url, callback) {
  var parsedUrl = parseUrl(url);
  return resolveUrl(url)
    .then(function(url) {
      return request(url)
    })
    .then(function(res) {
      var text = res.text;
      if (parsedUrl.host === 'laravel.io') {
        text = text.slice(5, -7);
      }
      return text.trim() + '\n';
    });
}

module.exports = getRawPaste;

