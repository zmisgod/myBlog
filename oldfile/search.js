/**
 * Created by zangmiao on 2016/9/2.
 */
$(document).on('click', '#search', function(){
    var keyword = $("#keywords").val();
    $.ajax({
        type : 'get',
        url : '/searchword?keyword='+keyword,
        dataType : 'json',
        success:function(data){
            if(data.code == 200){
                var html = '';
                $.each(data.data.matches, function (index, info) {
                    html += articleTemplate(info);
                });
                if(data.data.count == 15){
                    $("#search").attr('data-page', 2);
                    html += getMore();
                }
                $(".article-search-place").empty().append(html);
            }else {
                $(".article-search-place").empty().append('<p>'+ data.msg +'</p>');
            }
        }
    });
});

function articleTemplate(articleInfo)
{
    return '<div class="article-single col-xs-12">'
    +'<a href="detail_'+ articleInfo.id +'">'
    +'<h3>'+ articleInfo.attrs.post_title +'</h3></a>'
    +'<p>'+ articleInfo.attrs.post_intro +'...</p>'
    +'</div>';
}

function getMore()
{
    return '<a class="search-next col-xs-12">点击加载下一页</a>';
}

$(document).on('click', '.search-next', function(){
    var keyword = $("#keywords").val();
    var page = $("#search").attr('data-page');
    $.ajax({
        type : 'get',
        url : '/searchword?keyword='+ keyword + '&page='+page,
        dataType : 'json',
        success:function(data){
            if(data.code == 200){
                var html = '';
                $.each(data.data.matches, function (index, info) {
                    html +=articleTemplate(info);
                });
                if(data.data.count == 15){
                    $("#search").attr('data-page', Number(page) + 1);
                    html += getMore();
                }
                $('.search-next').remove();
                $(".article-search-place").append(html);
            }else {
                $('.search-next').remove();
                layer.msg('没有咯');
                return false;
            }
        }
    });
});