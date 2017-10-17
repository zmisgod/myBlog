/**
 * Created by zangmiao on 2016/8/19.
 */
var nowRgb = $('.detail-header').css('background-color');
//兼容性判断
if(HAVE_BG == 0){
    if (navigator.userAgent.indexOf("MSIE") >= 0) {
        addFontColor(nowRgb, true);
    } else {
        addFontColor(nowRgb, false);
    }
}else{
    $(".change-color").css({
        'text-shadow' : '1px 1px 14px #000',
        'color' : '#fff'
    });
    $('.detail-tags a').addClass('article-tags-black');
}

function addFontColor(colorCode, isMiscBrower) {
    //兼容IE
    if (isMiscBrower) {
        firstTwo = colorCode.substr(1, 2);
    } else {
        rgbs = colorCode.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        firstTwo = translateToHexCode(rgbs[1]);
    }
    if (
        !isNaN(firstTwo) && !isNaN(parseInt(firstTwo.substr(0, 1))) &&
        parseInt(firstTwo.substr(0, 1)) >= 0
    ) {
        $('.change-color').css({
            'color': '#fff'
        });
        $('.detail-tags a').addClass('article-tags-white');
    } else {
        $('.change-color').css({
            'color': '#000'
        });
        $('.detail-tags a').addClass('article-tags-black');
    }
}

function translateToHexCode(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
}