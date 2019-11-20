var check = 0;
    var bodyHeight = $('body,html').height();
    $('#navbar').on('click','.navbar__content__mobile-menu',function(e){
        e.preventDefault();
        if(check == 0){
            $(this).addClass('open-menu');
            $('#navbar').find('.navbar__content .navbar__content__menu').slideDown(500);
            $('#navbar').find('.navbar__mobile-menu-cover').css('height', bodyHeight - 90);
            $('#navbar').find('.navbar__mobile-menu-cover').addClass('show');
            check = 1;
        }else{
            $(this).removeClass('open-menu');
            $('#navbar').find('.navbar__content .navbar__content__menu').slideUp(500);
            $('#navbar').find('.navbar__mobile-menu-cover').css('height', 0);
            $('#navbar').find('.navbar__mobile-menu-cover').removeClass('show');
            check = 0;
        }
    });