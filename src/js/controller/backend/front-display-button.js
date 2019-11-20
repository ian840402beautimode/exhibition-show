function frontDisplayButton(idName){
    var buttonStatus = false;
    for (let i = 0; i < $(idName).find('.event-item-value').length; i++) {
        var dom = $(idName).find('.event-item-value')[i];
        console.log(dom);
        if($(dom).val() !== "") {
            buttonStatus = true;
        } else {
            buttonStatus = false;
            break;
        }
    }
    if (buttonStatus) {
        $(idName).find('.admin-radio-block').addClass('show');
    } else {
        $(idName).find('.admin-radio-block').removeClass('show');
        $(idName).find('input.item__radio[value=1]').prop('checked',false);
        $(idName).find('input.item__radio[value=0]').prop('checked',true);
    }
}

$('.event-item-value').on('change', function(){
    //工廠介紹
        //機器設備
        frontDisplayButton('#factory-device-item1');
        frontDisplayButton('#factory-device-item2');
        frontDisplayButton('#factory-device-item3');
        // 工藝技術
        frontDisplayButton('#factory-skill-item1');
        frontDisplayButton('#factory-skill-item2');
        frontDisplayButton('#factory-skill-item3');
    //服務項目
        //精密原型
        frontDisplayButton('#service-prototype-item1');
        frontDisplayButton('#service-prototype-item2');
        frontDisplayButton('#service-prototype-item3');
        frontDisplayButton('#service-prototype-item4');
        frontDisplayButton('#service-prototype-item5');
        //加工品項
        frontDisplayButton('#service-machining-item1');
        frontDisplayButton('#service-machining-item2');
        frontDisplayButton('#service-machining-item3');
        frontDisplayButton('#service-machining-item4');
        frontDisplayButton('#service-machining-item5');
        frontDisplayButton('#service-machining-item6');
    //最新消息-編輯頁
    frontDisplayButton('#news-edit');
    //首頁管理
        //編輯頁-輪播編輯
        frontDisplayButton('#slideshow-edit');
        //編輯頁-橫幅腰帶管理
        frontDisplayButton('#index-edit-item1');
        frontDisplayButton('#index-edit-item2');
        frontDisplayButton('#index-edit-item3');
        //編輯頁-服務項目管理
            //item1
            frontDisplayButton('#index-edit-service-item1');
            //item2
            frontDisplayButton('#index-edit-service-item2');
            //item3
            frontDisplayButton('#index-edit-service-item3');
            //item4
            frontDisplayButton('#index-edit-service-item4');
        //編輯頁-工廠介紹管理
            //item1
            frontDisplayButton($("#index-edit-factory-item1"));
            //item2
            frontDisplayButton($("#index-edit-factory-item2"));
            //item3
            frontDisplayButton($("#index-edit-factory-item3"));
            //item4
            frontDisplayButton($("#index-edit-factory-item4"));
}); 

$('.info__close').on('click', function(){
    //工廠介紹
        //機器設備
        frontDisplayButton('#factory-device-item1');
        frontDisplayButton('#factory-device-item2');
        frontDisplayButton('#factory-device-item3');
        //工藝技術
        frontDisplayButton('#factory-skill-item1');
        frontDisplayButton('#factory-skill-item2');
        frontDisplayButton('#factory-skill-item3');
    //服務項目
        //精密原型
        frontDisplayButton('#service-prototype-item1');
        frontDisplayButton('#service-prototype-item2');
        frontDisplayButton('#service-prototype-item3');
        frontDisplayButton('#service-prototype-item4');
        frontDisplayButton('#service-prototype-item5');
        //加工品項
        frontDisplayButton('#service-machining-item1');
        frontDisplayButton('#service-machining-item2');
        frontDisplayButton('#service-machining-item3');
        frontDisplayButton('#service-machining-item4');
        frontDisplayButton('#service-machining-item5');
        frontDisplayButton('#service-machining-item6');
    //首頁管理
        //編輯頁-輪播編輯
        frontDisplayButton('#slideshow-edit');
        //編輯頁-橫幅腰帶管理
        frontDisplayButton('#index-edit-item1');
        frontDisplayButton('#index-edit-item2');
        frontDisplayButton('#index-edit-item3');
        //編輯頁-服務項目管理
            //item1
            frontDisplayButton('#index-edit-service-item1');
            //item2
            frontDisplayButton('#index-edit-service-item2');
            //item3
            frontDisplayButton('#index-edit-service-item3');
            //item4
            frontDisplayButton('#index-edit-service-item4');
        //編輯頁-工廠介紹管理
            //item1
            frontDisplayButton($("#index-edit-factory-item1"));
            //item2
            frontDisplayButton($("#index-edit-factory-item2"));
            //item3
            frontDisplayButton($("#index-edit-factory-item3"));
            //item4
            frontDisplayButton($("#index-edit-factory-item4"));
});
