/**
 * Created by zangmiao on 2016/8/21.
 */
$(document).on('click', '.pagination a', function () {
    var pageId = $(this).attr('data-page');
    if(pageId == ''){
        layer.msg('internal error');
        return false;
    }
    var articleId = $(this).parent().parent().attr('data-article-id');
    if(articleId == ''){
        layer.msg('internal error');
        return false;
    }
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    $.post('/comment', {'page':pageId, 'articleId': articleId, '_csrf' : csrfToken}, function (data) {
        if(data.code == 200){
            var comment = '<ul class="comments-main">';
            $.each(data.data.commentList, function (index, res) {
                comment += commentTemplet(res);
            });
            comment += '</ul>';
            $(".comments-main").empty().append(comment);
            $(".pagination").empty().append(data.data.pagination);
        }else{
            $(".comment-contains").empty().append('<p class="text-danger text-center">'+data.msg+'</p>');
        }
    }, 'json');
});
/**
 * 评论模板
 * @param commentInfo
 * @returns {string}
 */
function commentTemplet(commentInfo)
{
    return '<li>'+
                '<div>'+
                    '<a href="">'+
                        '<img class="img-circle" src="'+THEME_URL+'images/cat/10.png" alt="" width="40" height="40">'+
                    '</a>'+
                    '<a class="comment-name">'+commentInfo.comment_author+'</a>'+
                '</div>'+
                '<div>'+
                    '<p class="comment-content">'+commentInfo.comment_content+'</p>'+
                    '<a class="pull-right comment-time">评论于 ：'+commentInfo.comment_date_gmt+'</a>'+
                '</div>'+
           '</li>';
}

$(document).on('click', '#finish-input', function(){
    var articleId = $("#comment-id").val();
    if(articleId == ''){
        layer.msg('internal error');
        return false;
    }
    var commentContent = $("#comment-contents").val();
    if(commentContent == ''){
        layer.msg('评论内容为空');
        return false;
    }
    if(commentContent.length < 15){
        layer.msg('评论内容少于15个字');
        return false;
    }
    var author = $("#comment-author").val();
    if(author == '') {
        layer.msg('请输入您的昵称、姓名');
        return false;
    }
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    $.post('/comment/comment', {'_csrf' : csrfToken, 'articleId' :articleId, 'content' : commentContent, 'author' : author}, function (data) {
        if(data.code == 200){
            layer.msg(data.msg);
            var comment_array = {comment_author : escapeHtml(author), comment_content: escapeHtml(commentContent), comment_date_gmt: data.time};
            $(".comments-main").prepend(commentTemplet(comment_array));
            $("#comment-contents").val('');
            $("#comment-author").val('');
        }else{
            layer.msg(data.msg);
        }
    }, 'json')
});
/**
 * 防xxs
 * @param string
 * @returns {string}
 */
function escapeHtml(string) {
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}