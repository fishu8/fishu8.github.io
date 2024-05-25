const HTANDROID = ""; // Android
const HTIOS = ""; // iOS

const HTSPARE = ""; // 备用
const ISSHOWSPARE = false;

wechatOrQQBrowser();

showBtnSpare();

function showBtnSpare() {
    const ua = navigator.userAgent;
    const iOSType = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('Mac OS X') > -1;
    if (iOSType && ISSHOWSPARE) {
        $("#yxbyquick").show();
    } else {
        $("#yxbyquick").hide();
    }
}

const $btnDown = $('#download');
$btnDown.click(function () {
    deviceType("");
});

const $btnDownquick = $('#downquick');
$btnDownquick.click(function () {
    deviceType("spare");
});

$('.yxbymask').click(function () {
});

function wechatOrQQBrowser() {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/ QQ\//i) == " qq\/") {
        $('.yxbymask').show();
        $('.showbg').hide();
    } else {
        $('.yxbymask').hide();
        $('.showbg').show();
    }
}

function deviceType(v) {
    const u = navigator.userAgent;
    const AdrType = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('Windows') > -1;
    const iOSType = u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Mac OS X') > -1;
    if (AdrType) {
        window.location.href = HTANDROID;
    } else if (iOSType) {
        if (v == "spare") {
            window.location.href = HTSPARE;
        } else {
            window.location.href = HTIOS;
        }
    }
}