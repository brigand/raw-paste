var Promise = require('es6-promise').Promise;
var superagent = require('superagent');

module.exports = function request(url) {
  return new Promise(function(resolve, reject) {
    superagent.get(url)
      .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36')
      .set('Referer', url)
      .end(function(err, res) {
        if (err) return reject(err);
        if (res.statusCode >= 400) return reject('Request for ' + url + ' returned ' + res.statusCode);

        resolve(res);
      });
  });
}

