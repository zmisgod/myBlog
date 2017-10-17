/**
 * Created by zangmiao on 2016/8/19. update on 2016/9/21
 */
var myScroll;
/**
 * 当页面加载需要完成下面操作
 * 1、获取第一次屏幕的尺寸并记录到body的data-width中
 * 2、修改菜单的宽度、高度
 * 3、设置Iscroll菜单滚动插件生效
 * 4、根据body的data-width设置相关大(分辨率大、等于748)、小(分辨率小与748)屏幕的显示设置
 */
$(window).ready(function () {
    //1
    var clientWidth = $(window).width();
    $('body').attr('data-width', clientWidth);
    //2
    menuJustice();
    setMenuMiddleOfScroon();
    //3
    myScroll = new IScroll('#wrapper', {
        eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false,click: true
    });
    //4
    if (clientWidth >= 748) {
        changeLeftSize();
        loadBigSize();//按照大屏幕尺寸加载
    } else {
        changeSmallSize();
        loadSmallSize();//按照小屏幕尺寸加载
    }
});
/**
 * 当窗口改变时
 * 1、当前屏幕尺寸记录到body的data-width
 * 2、根据上面获取的数据判断当前页面是否需要重新刷新
 * 3、修改菜单的宽度、高度
 * 4、修改大(分辨率大、等于748)、小屏幕(分辨率小与748)设置相关显示效果
 */
$(window).resize(function () {
    //1
    var clientWidth = $(window).width();
    var oldClintWidth = $('body').attr('data-width');
    //2
    if ((clientWidth >= 768 && oldClintWidth <= 768) || (clientWidth <= 768 && oldClintWidth >= 768)) {
        window.location.reload();
    }
    //3
    menuJustice();
    setMenuMiddleOfScroon();
    //4
    if (clientWidth >= 748) {
        changeLeftSize();
    } else {
        changeSmallSize();
    }
});
/**
 * 大分辨率的相关尺寸设置
 */
function changeLeftSize() {
    var clientHeight = $(window).height();

    var selectorHomeLeft = $(".home-left");
    var homeLeftWidth = selectorHomeLeft.width();

    var selectorHomeMySpace = $(".home-myspace");
    var homeMySpaceHeight = selectorHomeMySpace.height();
    var homeMySpaceWidth = selectorHomeMySpace.width();

    var selectorHomeConnect = $(".home-connect-us");
    var homeConnectUs = selectorHomeConnect.width();

    var homeRightMenuHeight = $(".right-menu").height();
    selectorHomeLeft.css({
        'height': clientHeight
    });
    selectorHomeMySpace.css({
        'top': parseInt((clientHeight - homeMySpaceHeight)/3),
        'left': parseInt((homeLeftWidth - homeMySpaceWidth)/2)
    });
    selectorHomeConnect.css({
        'left': parseInt((homeLeftWidth - homeConnectUs)/2)
    });
    $(".home-article-container").css({
        'height': parseInt(clientHeight - homeRightMenuHeight - 5)
    });
}
/**
 * 大分辨率滚动加载
 */
function loadBigSize(){
    var stop = true;
    var page = 1;
    var selectorHomArticleContainer = $('.home-article-container');
    var selectorLoadMore = $('#loadMore');
    selectorHomArticleContainer.scroll(function () {
        var totalHeight = parseFloat($(window).height()) + parseFloat(selectorHomArticleContainer.scrollTop());
        var url = selectorLoadMore.attr('data') + "&page=" + (page + 1);
        if (selectorHomArticleContainer[0].scrollHeight <= totalHeight + 120) {
            if (stop == true) {
                stop = false;
                selectorLoadMore.addClass('enabled');
                $.get(url, {}, function (txt) {
                    if (txt) {
                        selectorLoadMore.before(txt);
                        stop = true;
                        selectorLoadMore.removeClass('enabled');
                        page++;
                    } else {
                        stop = false;
                        selectorLoadMore.remove();
                    }
                }, "text");
            }
        }
    });
}
/**
 * 小分辨率的相关尺寸设置
 */
function changeSmallSize() {
    var clientHeight = $(window).height();//当前窗口高度

    var selectorHomeLeft = $(".home-left");
    var homeLeftWidth = selectorHomeLeft.width();//当前左侧图的宽度

    var selectorHomeMySpace = $(".home-myspace");
    var homeMySpaceHeight = selectorHomeMySpace.height();//头像块的高度
    var homeMySpaceWidth = selectorHomeMySpace.width();//头像块的宽度

    var selectorHomeConnect = $(".home-connect-us");
    var homeConnectUs = selectorHomeConnect.width();//联系我们、share icon块的宽度
    selectorHomeLeft.css({
        'height': parseInt(clientHeight / 2)//小尺寸下，上方大图为屏幕的一半
    });
    selectorHomeMySpace.css({
        'top': parseInt((clientHeight / 2 - homeMySpaceHeight) / 4),
        'left': parseInt((homeLeftWidth - homeMySpaceWidth) / 2)
    });//头像块居中操作
    selectorHomeConnect.css({
        'left': (homeLeftWidth - homeConnectUs) / 2,
        'bottom': '2em'
    });//联系我们、share icon 块居中且居上放大图2em距离
    $(".home-article-container").css({
        'overflow': 'visible'
    });//再设置overflow属性为visible
}
/**
 * 小尺寸屏幕滚动加载
 */
function loadSmallSize()
{
    var stop=true;
    var page = 1;
    var selectorLoadMore = $('#loadMore');
    $(window).scroll(function(){
        var totalHeight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
        var url = selectorLoadMore.attr('data')+"&page="+(page+1);
        if($(document).height() <= totalHeight + 120){
            if(stop==true){
                stop=false;
                selectorLoadMore.addClass('enabled');
                $.get(url, {},function(txt){
                    if (txt) {
                        selectorLoadMore.before(txt);
                        stop=true;
                        selectorLoadMore.removeClass('enabled');
                        page++;
                    }else {
                        stop = false;
                        selectorLoadMore.remove();
                    }
                },"text");
            }
        }
    });
}
/**
 * 根据菜单的尺寸设置
 * #scroller的宽度
 * #wrapper的高度
 */
function menuJustice()
{
    var menuTotalWidth = 6;
    var menuHeight = 0;
    $("#scroller a").each(function(index, ele){
        menuTotalWidth += $(ele)[0].clientWidth;
        menuHeight = parseInt($(ele)[0].scrollHeight);
    });
    $("#scroller").css({"width":menuTotalWidth, "height": parseInt(menuHeight)+2});
    $("#wrapper").css("height", parseInt(menuHeight)+2);
}
/**
 * 菜单居中操作
 */
function setMenuMiddleOfScroon()
{
    var scrollers = $("#scroller");
    var menuWidth = scrollers.width();
    var screenWidth = $(".right-menu").width();
    if(screenWidth > menuWidth){
        scrollers.css("left", parseInt((screenWidth-menuWidth)/2));
    }
}