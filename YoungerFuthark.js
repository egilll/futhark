/*
  Convert an entire webpage into Younger Futhark
*/
(function() {
  function youngerFuthark(input) {
    return input
      .replace(/(f)/ig,              'ᚠ')
      .replace(/(á)/ig,              'ᛅᚢ')
      .replace(/(ó)/ig,              'ᚬᚢ')
      .replace(/(u|v|o|ö|ú|ø|w)/ig,  'ᚢ')
      .replace(/(þ|ð)/ig,            'ᚦ')
      .replace(/(o)/ig,              'ᚬ')
      .replace(/(r)/ig,              'ᚱ')
      .replace(/(k|g|q)/ig,          'ᚴ')
      .replace(/(h)/ig,              'ᚼ')
      .replace(/(n)/ig,              'ᚾ')
      .replace(/(i|j|e|é|í|ý|y)/ig,  'ᛁ')
      .replace(/(a|æ)/ig,            'ᛅ')
      .replace(/(s|c|x)/ig,          'ᛋ')
      .replace(/(t|d)/ig,            'ᛏ')
      .replace(/(b|p)/ig,            'ᛒ')
      .replace(/(m)/ig,              'ᛘ')
      .replace(/(l)/ig,              'ᛚ')
      .replace(/(z)/ig,              'ᛦ')
  }
  function findText(node) {
    if (node.nodeType == 3) {
      node.data = youngerFuthark(node.data)
    }
    if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
      for (var i = 0; i < node.childNodes.length; i++) {
        findText(node.childNodes[i])
      }
    }
  }
  findText(document.body)
})()
