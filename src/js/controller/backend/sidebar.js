$("#admin-sidebar-btn").on("click",function() {
    $("#admin-sidebar").toggleClass("_hidden");
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


//TODO:active連結想其他方法做
export let sidebarPosition = idName => {
    let position = location.pathname.substring(1).split("/")[1];

    idName.find(".menu__link").each(function(){
        let item = $(this).attr("href").substring(1).split("/")[1];
        if (item === position) {
            $(this).parents(".menu-list__item").addClass('_active');
            $(this).parents(".sub-menu__item").addClass('_active');
            $(this).parents(".sub-menu").slideDown();
        }
    });
}

sidebarPosition($("#admin-sidebar-block"));