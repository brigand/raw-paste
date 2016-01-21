var Promise = require('es6-promise').Promise;
var request = require('./request');
var parseUrl = require('url').parse;
var resolveUrl = require('url').resolve;
var log = require('./log');
var specificSites = require('./specific-sites');

module.exports = function(originalUrl) {
  var parsed = parseUrl(originalUrl);
  if (specificSites[parsed.host]) {
    log('Found specificSites for ' + originalUrl);
    return Promise.resolve(specificSites[parsed.host](originalUrl));
  }

  log('Attempting to extract raw url from unknown paste for ' + originalUrl);
  return request(originalUrl)
    .then(function(res) {
      var match1 = res.text.match(/href="([^"]*raw[^"]*)"/i)
      var match2 = res.text.match(/href="([^"]*)".*raw/i)
      if (!match1 && !match2) {
        log('No match found for ' + originalUrl);
        return Promise.reject('No raw url found');
      }

      var url = match1 ? match1[1]: match2[1];
      url = resolveUrl(originalUrl, url);
      return url;
    });
}

