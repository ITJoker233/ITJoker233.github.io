function hitokoto() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://v1.hitokoto.cn");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            var hitokoto = document.getElementById("hitokoto");
            var email = document.getElementById("Email");
            email.href = window.atob("bWFpbHRvOmlAaXRqb2tlci5jbg==");
            hitokoto.innerText = data.hitokoto
        }
    };
    xhr.send()
}

(function($) {
    var $window = $(window),
        $body = $("body"),
        $wrapper = $("#wrapper"),
        $header = $("#header"),
        $footer = $("#footer");
    breakpoints({ xlarge: ["1281px", "1680px"], large: ["981px", "1280px"], medium: ["737px", "980px"], small: ["481px", "736px"], xsmall: ["361px", "480px"], xxsmall: [null, "360px"] });
    $window.on("load", function() { window.setTimeout(function() { $body.removeClass("is-preload") }, 100) });
    if (browser.name == "ie") {
        var flexboxFixTimeoutId;
        $window.on("resize.flexbox-fix", function() {
            clearTimeout(flexboxFixTimeoutId);
            flexboxFixTimeoutId = setTimeout(function() { if ($wrapper.prop("scrollHeight") > $window.height()) { $wrapper.css("height", "auto") } else { $wrapper.css("height", "100vh") } }, 250)
        }).triggerHandler("resize.flexbox-fix")
    }
    var $nav = $header.children("nav"),
        $nav_li = $nav.find("li");
    if ($nav_li.length % 2 == 0) {
        $nav.addClass("use-middle");
        $nav_li.eq(($nav_li.length / 2)).addClass("is-middle")
    }
    hitokoto();
})(jQuery);
console.clear();
console.log(
    "\n   %c  Domain: https://www.itjoker.cn  BY ITJoker  \n\n",
    "color: #ffffff; background: rgb(0, 145, 228); padding:5px 0;border-radius: 5px;",
);
console.log("%c  如果你想抄就抄吧，不过署名写下我ITJoker，谢谢~ \n  %c Update Date:2020.1.11\n  %c Author: ITJoker\n  %c Description Web Site：https://www.itjoker.cn\n  %c Blog Web Site: https://blog.itjoker.cn\n  %c Blog RSS Site: https://blog.itjoker.cn/atom.xml\n  %c 如果你想互换友链的话,请到该地址下评论留言:https://blog.itjoker.cn/friends\n  %c 友链格式:\n      博客地址:\"https://blog.itjoker.cn\"\n      博客名字:\"ITJoker\"\n      博客描述:\"吹水特派员 - ITJoker IT从业者（业余吉他手）\"\n  %c 注：并非一定要以这种格式,最好包括这三个要素~如果没有及时更新，可能只是我没有看到~233",
    "color: rgb(0, 145, 228);;font-size:12px;",
    "color: rgb(0, 145, 228);;font-size:12px;",
    "color: rgb(0, 145, 228);;font-size:12px;",
    "color: rgb(0, 145, 228);;font-size:12px;",
    "color: rgb(0, 145, 228);;font-size:12px;",
    "color: rgb(0, 145, 228);;font-size:12px;",
    "color: rgb(0, 145, 228);;font-size:12px;",
    "color: rgb(0, 145, 228);;font-size:12px;",
    "color: rgb(0, 145, 228);;font-size:12px;", )