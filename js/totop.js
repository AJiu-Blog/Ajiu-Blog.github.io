$(window).scroll(function() {
    $(window).scrollTop() > $(window).height()*0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});

$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 1000, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

$("#homelogo").click(function() {
    $("html, body").animate({
        scrollTop: $(window).height()
    }, 1000, null);
    return false;
});

var articleW = $('#main>article').css("width");

// 文章列表
$("#menu-switch").click(function() {
    if($("#toc-sidebar").hasClass("toc-hide")){
        setTimeout(function () { 
            $('#articleInner .article-img-inner').animate({'line-height': '27px'}, 0, 'linear', function(){
                $("#toc-sidebar").removeClass("toc-hide");
                $('#main > article').animate({"width": articleW}, 0, null);
            });
        }, 0);
    }else{
        $("#toc-sidebar").addClass("toc-hide");
        setTimeout(function () { 
            $('#main > article').animate({"width": "100%"}, 0, null, function(){
                $('#articleInner .article-img-inner').animate(
                    {'line-height': '40px'}, 100, null);
            });
        }, 0);
    }
});

// page_percentage
$(document).scroll(function(){
    var d_h = $(document).height();
    var c_h = $(window).height();
    var c_t_h = $(window).scrollTop();
    var schedule = c_t_h / (d_h-c_h-0.5);
    var str = Number(schedule*100).toFixed();
    console.log(typeof(str));
    if(0 === eval(str-0))
        str = '';
    else if(100 <= eval(str-0))
	    str = '100 %';
	else
        str += " %";
    $("#page_percentage").text(str);
});
