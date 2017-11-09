/**
 * Created by zangmiao on 2016/8/21.
 */
var clientWidth = $(window).width();
$('body').attr('data-width', clientWidth);
if (clientWidth >= 748) {
    changeLeftSize();
} else {
    changeSmallSize();
}
$(window).resize(function() {
    var clientWidth = $(window).width();
    var oldClintWidth = $('body').attr('data-width');
    if ((clientWidth >= 768 && oldClintWidth <= 768) || (clientWidth <= 768 && oldClintWidth >= 768)) {
        window.location.reload();
    }
    if (clientWidth >= 748) {
        changeLeftSize();
    } else {
        changeSmallSize();
    }
});

function changeLeftSize() {
    var clientHeight = $(window).height();
    var homeLeftWidth = $(".home-left").width();
    var homeMySpaceHeight = $(".home-myspace").height();
    var homeMySpaceWidth = $(".home-myspace").width();
    var homeConnectUs = $(".home-connect-us").width();
    $(".home-left, .home-right").css({
        'height': clientHeight
    });
    $(".home-myspace").css({
        'top': (clientHeight - homeMySpaceHeight) / 3 * 1,
        'left': (homeLeftWidth - homeMySpaceWidth) / 2
    });
    $(".home-connect-us").css({
        'left': (homeLeftWidth - homeConnectUs) / 2
    });
    $('.home-right').css({
        'overflow-y' : 'auto'
    });
}

function changeSmallSize() {
    var clientHeight = $(window).height();
    var homeLeftWidth = $(".home-left").width();
    var homeMySpaceHeight = $(".home-myspace").height();
    var homeMySpaceWidth = $(".home-myspace").width();
    var homeConnectUs = $(".home-connect-us").width();
    $(".home-left").css({
        'height': clientHeight / 2
    });
    $(".home-myspace").css({
        'top': (clientHeight / 2 - homeMySpaceHeight) / 4 * 1,
        'left': (homeLeftWidth - homeMySpaceWidth) / 2
    });
    $(".home-connect-us").css({
        'left': (homeLeftWidth - homeConnectUs) / 2,
        'bottom': '2em'
    });
}