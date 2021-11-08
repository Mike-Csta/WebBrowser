var ipc = require('ipc'),
  url = require('url');

window.onload = function () {
  ipc.sendToHost(getFaviconLink(), 'webview:favicon');
};

function getFaviconLink() {
  var href = window.location.href;

  var final_favicon = '';
  var elem = document.getElementsByTagName('link');
  for (var i = 0; i < elem.length; i++) {
    if (/icon/.test(elem[i].rel) == true) {
      final_favicon = elem[i].href;

      // if rel="shortcut icon" ,it should be considered first.(WTF!!)
      if (/^shortcut /.test(elem[i].rel) == true) {
        break;
      }
    }
  }

  if (final_favicon == '') {
    return null;
  } else {
    return url.resolve(href, final_favicon);
  }
}

var link = getFaviconLink();

export default link;
