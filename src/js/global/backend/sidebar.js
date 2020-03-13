const position = location.pathname;
const path = location.pathname.substring(1).split('/')[1];

// 預設打開的sidebar 
if(path !== 'dashboard'){
    $('#admin-sidebar-block').find(".menu__link").each(function(){
        let item = new RegExp($(this).attr("href"));
        if (item.test(position)) {
            $(this).parents(".menu-list__item").addClass('_active');
            $(this).parents(".sub-menu__item").addClass('_active');
            $(this).parents(".sub-menu").slideDown(0);
        }
    });
}

$("#admin-sidebar-btn").on("click",function() {
    $("#admin-sidebar").toggleClass("_hidden");
    $('main').toggleClass('_scroll');
})

$("#admin-sidebar-block").find(".menu-list__item__title").on("click",function(){
    if ($(this).parent().hasClass("_active")) {
        $("#admin-sidebar-block").find(".menu-list__item").removeClass("_active");
        $("#admin-sidebar-block").find(".sub-menu").slideUp();
    } else {
        $("#admin-sidebar-block").find(".menu-list__item").removeClass("_active");
        $("#admin-sidebar-block").find(".sub-menu").slideUp();
        $(this).next().slideDown();
        $(this).parent().addClass('_active');
    }  
})