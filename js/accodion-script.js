$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".glyphicon-menu-right").removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".glyphicon-menu-down").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right");
});

$(".panel-collapse").on("shown.bs.collapse", function () {
    var selected = $(this);
    var collapseh = $(".collapse.in").height();
	$('html, body').animate({
        scrollTop: $(selected).parent(".panel").offset().top
    }, 500);
    return false;
});