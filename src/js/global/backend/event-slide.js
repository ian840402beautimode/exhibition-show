//判斷是否為下拉選單(.event-slide),若有則在子層加入相對應class
$('body').find('.event-slide').each(function(index,elm){
    var childElement = $(elm).children();
    $(childElement[0]).addClass('event-slide__header');
    $(childElement[1]).addClass('event-slide__content');
    eventSlideClick(elm)
});
//點擊事件
//判斷頁面是否開啟 0:未開啟 1:開啟
function eventSlideClick(dom){
    var openStatus = 1;
    $(dom).find('.event-slide__header').click(function(){
        switch (true) {
            case openStatus == 0:
                $(dom).removeClass('close');
                $(dom).find('.event-slide__content').slideDown();
                openStatus = 1;
                break;
            default:
                $(dom).addClass('close');
                $(dom).find('.event-slide__content').slideUp();
                openStatus = 0;
                break;
        }
    });
}