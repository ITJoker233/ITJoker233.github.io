var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');      
App = {
    mouseEvent: function() {
        $('body').on('click', function() {
            $('#personal-menu').fadeOut(250);
        });
        $(document).on('click', '#menu-bar.memory-menu', function() {
            $('#menu-bar').animate({ left: -42 }, 200, function() {
                $(this).removeClass('memory-menu').addClass('memory-close');
                $(this).animate({ left: 0 }, 200);
            });
            $('#mobile-menu').fadeIn(200).css('top', 0);
        });
        $(document).on('click', '#menu-bar.memory-close', function() {
            $('#menu-bar').animate({ left: -42 }, 200, function() {
                $(this).removeClass('memory-close').addClass('memory-menu');
                $(this).animate({ left: 0 }, 200);
            });
            $('#mobile-menu').fadeOut(200).css('top', -400);
        });
    },
    outputlog: function() {
        var newDate = new Date();
        var timestamp = document.getElementById('UpdateTime').innerHTML;

        console.log(timestamp);
        newDate.setTime(timestamp);
        console.clear();
        console.log(" Blog Update Time: " + newDate.toLocaleDateString());
        console.log("\n %c \u26a1Theme:Card Author's Blog:https://blog.itjoker.cn  Write By ITJoker  \n\n", "color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;border-radius:5px;");
    }
}
App.mouseEvent();

function hitokoto() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://v1.hitokoto.cn');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            var hitokoto = document.getElementById('hitokoto');
            hitokoto.innerText = data.hitokoto;
        }
    }
    xhr.send();
}
// 消息推送
function createMessage(message, time = 1000) {
    if ($(".message").length > 0) {
        $(".message").remove();
    }
    $("body").append('<div class="message"><p class="message-info">' + message + '</p></div>');
    setTimeout("$('.message').remove()", time);
}

// 复制到剪切板
function CopyToClipboard(input) {
    var textToClipboard = input;
    var success = true;
    if (window.clipboardData) {
        window.clipboardData.setData("Text", textToClipboard);
    } else {
        var forExecElement = CreateElementForExecCommand(textToClipboard);
        SelectContent(forExecElement);
        var supported = true;
        try {
            if (window.netscape && netscape.security) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            success = document.execCommand("copy", false, null);
        } catch (e) {
            success = false;
        }
        document.body.removeChild(forExecElement);
    }
    if (success) {
        createMessage("复制成功！你可以直接粘贴！");
    } else {
        createMessage("抱歉，你的浏览器不支持使用剪切板!");
    }
}

function CreateElementForExecCommand(textToClipboard) {
    var forExecElement = document.createElement("div");
    forExecElement.style.position = "absolute";
    forExecElement.style.left = "-10000px";
    forExecElement.style.top = "-10000px";
    forExecElement.textContent = textToClipboard;
    document.body.appendChild(forExecElement);
    forExecElement.contentEditable = true;
    return forExecElement;
}

function SelectContent(element) {
    var rangeToSelect = document.createRange();
    rangeToSelect.selectNodeContents(element);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(rangeToSelect);
}


function getVersion(version) {
    version = version.toString().split('.').join('');
    if (version.length == 3)
        version = parseInt(version);
    else if (version.length == 2)
        version = parseInt(version) * 10;
    return version;
}