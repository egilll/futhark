<h1 align="center">
🏔 Futhark transcriber / ᚠᚢᚦᚬᚱᚴ 🌋
</h1>

**[Try the Futhark transcriber here](https://egilll.github.io/futhark/index.html)**

This is a transcriber from the **Latin** script into **Futhark**. You can [enter your text here](https://egilll.github.io/futhark/index.html) or you can follow the instructions below in order to convert an entire webpage.

Reading webpages in ᚠᚢᚦᚬᚱᚴ will greatly enhance your web-browsing experience.

**You can choose from:**

- [👵🏻 **Elder Futhark**](#-elder-futhark)
- [👧🏻 **Younger Futhark**](#-younger-futhark)

<br/>

## 👵🏻 Elder Futhark

The Elder Futhark is the oldest form of the runic alphabets, used from the 2nd to the 8th century in Scandinavia and Germany.

**Paste the following script** into the developer console, or into the address bar of your browser, just check to see that your browser doesn't remove the `javascript:` part! Alternatively, you can add it as a Bookmark in your browser.

```js
javascript:!function(){!function e(a){if(3==a.nodeType&&(a.data=a.data.replace(/(f)/gi,"ᚠ")
.replace(/(u|o|ö|ú|ø)/gi,"ᚢ").replace(/(þ|ð)/gi,"ᚦ").replace(/(a)/gi,"ᚨ")
.replace(/(r)/gi,"ᚱ").replace(/(k|q)/gi,"ᚲ").replace(/(g)/gi,"ᚷ").replace(/(w|v)/gi,"ᚹ")
.replace(/(h)/gi,"ᚺ").replace(/(ng)/gi,"ᛜ").replace(/(n)/gi,"ᚾ").replace(/(i|í|ý|y)/gi,"ᛁ")
.replace(/(j)/gi,"ᛃ").replace(/(æ)/gi,"ᛇ").replace(/(p)/gi,"ᛈ").replace(/(z)/gi,"ᛉ")
.replace(/(s|c|x)/gi,"ᛊ").replace(/(t)/gi,"ᛏ").replace(/(b)/gi,"ᛒ").replace(/(e|é)/gi,"ᛖ")
.replace(/(m)/gi,"ᛗ").replace(/(l)/gi,"ᛚ").replace(/(o)/gi,"ᛟ").replace(/(t|d)/gi,"ᛞ")),
1==a.nodeType&&"SCRIPT"!=a.nodeName)for(var c=0;c<a.childNodes.length;c++)
e(a.childNodes[c])}(document.body)}();
```

[See the source](ElderFuthark.js)

This will convert:

    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Into:

    ᛚᚢᚱᛖᛗ ᛁᛈᛊᚢᛗ ᛞᚢᛚᚢᚱ ᛊᛁᛏ ᚨᛗᛖᛏ, ᛊᚢᚾᛊᛖᛊᛏᛖᛏᚢᚱ ᚨᛞᛁᛈᛁᛊᛊᛁᚾᚷ ᛖᛚᛁᛏ,
    ᛊᛖᛞ ᛞᚢ ᛖᛁᚢᛊᛗᚢᛞ ᛏᛖᛗᛈᚢᚱ ᛁᚾᛊᛁᛞᛁᛞᚢᚾᛏ ᚢᛏ ᛚᚨᛒᚢᚱᛖ ᛖᛏ ᛞᚢᛚᚢᚱᛖ ᛗᚨᚷᚾᚨ ᚨᛚᛁᚲᚢᚨ.

## 👧🏻 Younger Futhark

The Younger Futhark was used from the 9th century to the 12th in Scandinavia.

**Paste the following script** into the developer console, or into the address bar of your browser, just check to see that your browser doesn't remove the `javascript:` part! Alternatively, you can add it as a Bookmark in your browser.

```js
javascript:!function(){!function e(a){if(3==a.nodeType&&(a.data=a.data.replace(/(f)/gi,"ᚠ")
.replace(/(á)/gi,"ᛅᚢ").replace(/(ó)/gi,"ᚬᚢ").replace(/(u|v|o|ö|ú|ø|w)/gi,"ᚢ")
.replace(/(þ|ð)/gi,"ᚦ").replace(/(o)/gi,"ᚬ").replace(/(r)/gi,"ᚱ").replace(/(k|g|q)/gi,"ᚴ")
.replace(/(h)/gi,"ᚼ").replace(/(n)/gi,"ᚾ").replace(/(i|j|e|é|í|ý|y)/gi,"ᛁ").replace(/(a|æ)/gi,"ᛅ")
.replace(/(s|c|x)/gi,"ᛋ").replace(/(t|d)/gi,"ᛏ").replace(/(b|p)/gi,"ᛒ").replace(/(m)/gi,"ᛘ")
.replace(/(l)/gi,"ᛚ").replace(/(z)/gi,"ᛦ")),1==a.nodeType&&"SCRIPT"!=a.nodeName)
for(var c=0;c<a.childNodes.length;c++)e(a.childNodes[c])}(document.body)}()
```

[See the source](YoungerFuthark.js)

This will convert:

    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Into:

    ᛚᚢᚱᛁᛘ ᛁᛒᛋᚢᛘ ᛏᚢᛚᚢᚱ ᛋᛁᛏ ᛅᛘᛁᛏ, ᛋᚢᚾᛋᛁᛋᛏᛁᛏᚢᚱ ᛅᛏᛁᛒᛁᛋᛋᛁᚾᚴ ᛁᛚᛁᛏ,
    ᛋᛁᛏ ᛏᚢ ᛁᛁᚢᛋᛘᚢᛏ ᛏᛁᛘᛒᚢᚱ ᛁᚾᛋᛁᛏᛁᛏᚢᚾᛏ ᚢᛏ ᛚᛅᛒᚢᚱᛁ ᛁᛏ ᛏᚢᛚᚢᚱᛁ ᛘᛅᚴᚾᛅ ᛅᛚᛁᚴᚢᛅ.

---

**Note:**

- This preserves spaces
- This does not transcribe phonetically
- Some letters may be incorrect
- Only checks for the letters of the English and Icelandic alphabet

## Fonts

* [Download the Noto Sans Runic font from Google](https://github.com/egilll/futhark/raw/master/docs/NotoSansRunic.ttf)
