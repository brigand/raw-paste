var getRawPaste = require('../');
var resolveUrl = require('../src/resolve-url');
var assertionHandler = function(content) {
  if (content !== 'example\n') {
    throw new Error('Expected "example" but got "' + content + '"');
  }
  return true;
};

describe('getRawPaste', function() {
/*  it('resolves for pastebin', function() {
    return resolveUrl('http://pastebin.com/ggr8smub').then(function(url){
      console.error(url);
    })
  });

  it('fetches for pastebin', function() {
    return getRawPaste('http://pastebin.com/ggr8smub').then(assertionHandler);
  });*/

  it('works for bpaste', function() {
    return getRawPaste('https://bpaste.net/show/90d072650565').then(assertionHandler);
  });

  it('works for dpaste', function() {
    return getRawPaste('http://dpaste.com/3XNRG4G').then(assertionHandler);
  });

  it('works for larvel', function() {
    return getRawPaste('http://laravel.io/bin/QNxPx').then(assertionHandler);

  });
});

