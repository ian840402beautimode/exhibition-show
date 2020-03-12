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


//TODO:active連結想其他方法做
export let sidebarPosition = idName => {
    let position = location.pathname;
    idName.find(".menu__link").each(function(){
        let item = new RegExp($(this).attr("href"));
        if (item.test(position)) {
            $(this).parents(".menu-list__item").addClass('_active');
            $(this).parents(".sub-menu__item").addClass('_active');
            $(this).parents(".sub-menu").slideDown(0);
        }
    });
}

//判斷 現在網址是否是 後台首頁
let id = location.pathname.substring(1).split('/')[1];
if(id !== 'main'){
    sidebarPosition($("#admin-sidebar-block"));
}

// 清除 sessionStorage 
$('.sub-menu__item').on('click', function(){
    sessionStorage.removeItem('tablePageNum');
    // 清除有層級列表的值
    sessionStorage.removeItem('first-name');
    sessionStorage.removeItem('second-name');
    
})
