$(document).ready(function(){
    let sideBar = $('#admin-sidebar'),
        widthWidth = $(window).width();
    setPageMode(widthWidth);
    $(window).resize(function(){
        let resizeWidth = $(window).width();
        setPageMode(resizeWidth);
    })

    function setPageMode(pageWidth){
        if(pageWidth <= 1300){
            sideBar.addClass('_hidden');
        }else{
            sideBar.removeClass('_hidden');
        }
    }
});