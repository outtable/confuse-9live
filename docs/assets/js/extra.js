(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var article = document.querySelector(".md-content__inner");
    if (!article || article.querySelector(".crab-cta")) {
      return;
    }
    var path = window.location.pathname || "";
    var extra = "";
    if (path.indexOf("Unity") !== -1 || path.indexOf("unity") !== -1) {
      extra = '<p>这篇对应官网说明：<a href="https://crab-ios.com/unity-ios">Unity iOS 混淆</a></p>';
    } else if (path.indexOf("Flutter") !== -1 || path.indexOf("flutter") !== -1) {
      extra = '<p>这篇对应官网说明：<a href="https://crab-ios.com/flutter-ios">Flutter iOS 混淆</a></p>';
    } else if (path.indexOf("cocos") !== -1 || path.indexOf("Cocos") !== -1) {
      extra = '<p>这篇对应官网说明：<a href="https://crab-ios.com/cocos-ios">Cocos iOS 混淆</a></p>';
    } else if (path.indexOf("uniapp") !== -1 || path.indexOf("uni-app") !== -1) {
      extra = '<p>Uni-app 走 IPA 加固：<a href="https://crab-ios.com/uniapp-ios">官网说明</a></p>';
    } else if (path.indexOf("4.3") !== -1 || path.indexOf("publish") !== -1) {
      extra = '<p>审核说明见：<a href="https://crab-ios.com/appstore-4.3">4.3</a> / <a href="https://crab-ios.com/appstore-2.3.1">2.3.1</a></p>';
    }
    var box = document.createElement("aside");
    box.className = "crab-cta";
    box.innerHTML = "<p><strong>下一步</strong>　<a href=\"https://crab-ios.com/#download\">官网下载</a> · <a href=\"https://crab-ios.com/pricing\">收费方式</a> · <a href=\"https://crab-ios.com/\">小蟹首页</a></p>" + extra;
    article.appendChild(box);
  });
})();
