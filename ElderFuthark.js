/*
  Convert an entire webpage into Elder Futhark
*/
(function() {
  function elderFuthark(input) {
    return input
      .replace(/(á)/ig,            'ᚨᚢ')
      .replace(/(ó)/ig,              'ᛟᚢ')
      .replace(/(f)/ig,              'ᚠ')
      .replace(/(u|o|ö|ú|ø)/ig,      'ᚢ')
      .replace(/(þ|ð)/ig,            'ᚦ')
      .replace(/(a)/ig,            'ᚨ')
      .replace(/(r)/ig,              'ᚱ')
      .replace(/(k|q)/ig,            'ᚲ')
      .replace(/(g)/ig,              'ᚷ')
      .replace(/(w|v)/ig,             'ᚹ')
      .replace(/(h)/ig,              'ᚺ')
      .replace(/(ng)/ig,              'ᛜ')
      .replace(/(n)/ig,              'ᚾ')
      .replace(/(i|í|ý|y)/ig,  'ᛁ')
      .replace(/(j)/ig,  'ᛃ')
      .replace(/(æ)/ig,            'ᛇ')
      .replace(/(p)/ig,            'ᛈ')
      .replace(/(z)/ig,              'ᛉ')
      .replace(/(s|c|x)/ig,          'ᛊ')
      .replace(/(t)/ig,            'ᛏ')
      .replace(/(b)/ig,            'ᛒ')
      .replace(/(e|é)/ig,  'ᛖ')
      .replace(/(m)/ig,              'ᛗ')
      .replace(/(l)/ig,              'ᛚ')
      .replace(/(o)/ig,              'ᛟ')
      .replace(/(t|d)/ig,            'ᛞ')
  }
  function findText(node) {
    if (node.nodeType == 3) {
      node.data = elderFuthark(node.data)
    }
    if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
      for (var i = 0; i < node.childNodes.length; i++) {
        findText(node.childNodes[i])
      }
    }
  }
  findText(document.body)
})()
