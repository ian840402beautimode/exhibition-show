import { radioStatus, setRadioStatus } from '../../controller/form/radio_check_status.js';
import { uploadImageCheck } from '../../controller/common/upload-file-check.js';
import { isImageTitle } from '../../controller/common/return-is-image-title.js';

let domTemplate = (idName,itemName) => {
    var dom = $(idName).find('.' + itemName).clone().removeClass(itemName);
    return dom;
}

// 前台 首頁
export let viewIndexPage = data => {
    //info start
    $('#index-info-block').find('.item-info-title').text(data.info.title);
    $('#index-info-block').find('.item-info-content').text(data.info.content);
    //載入info list 內容
    for (var i = 0; i < data.info.first.length; i++) {
        if(data.info.first[i].status !== 0){  
            var dom = domTemplate('#index-info-block','item-template');
            dom.find('.item-template-image').attr('src', data.info.first[i].image);
            dom.find('.item-template-title').text(data.info.first[i].title);
            dom.find('.item-template-content').text(data.info.first[i].content);
            $('#index-info-block').find('.item-info-list').append(dom);
        }
    }
    //移除info 複製的template
    $('#index-info-block').find('.item-template').remove();
    //info end

    //about start
    //about 左側圖片
    $('#index-about-block').find('.item-about-image-1').css('background', 'url('+ data.about.second[0].image + ')');
    $('#index-about-block').find('.item-about-image-2').css('background', 'url('+ data.about.second[1].image + ')');
    $('#index-about-block').find('.imageblock__image').css({'background-position':'center','background-size':'cover','background-repeat':'no-repeat'});


    //about 第一段內容
    $('#index-about-block').find('#item-about-title-1').text(data.about.title);
    $('#index-about-block').find(".block__content").append(data.about.content);
    //about end


    //service start
    $('#index-service-block').find('#item-service-title').text(data.service.title);
    
    for (var i = 0; i < data.service.third.length; i++) {
        if(data.service.third[i].status !== 0){    
            var dom = domTemplate('#index-service-block','item-template');
            dom.find('.item-template-image').css('background', 'url(' + data.service.third[i].image+ ')');
            dom.find('.item-template-image').css({'background-position':'center','background-size':'cover','background-repeat':'no-repeat'});
            dom.find('.item-template-icon').attr('src', data.service.third[i].image_icon);
            dom.find('.item-template-title').text(data.service.third[i].title);
            dom.find('.item-template-content').text(data.service.third[i].content);
            dom.find('.item-template-link').attr('href',data.service.third[i].link);
            $('#index-service-block').find('.item-template-list').append(dom);
        }
    }
    $('#index-service-block').find('.item-template').remove();
    //service end

    //factory start
    $('#index-factory-block').find('.factory__image').css({'background':'url('+data.factory.image+')','background-size':'cover'})
    $('#index-factory-block').find('#item-factory-title').text(data.factory.title);
    $('#index-factory-block').find('.item-factory-subtitle').text(data.factory.subtitle);
    $('#index-factory-block').find('.item-factory-des').text(data.factory.content);
    for (let i = 0; i < data.factory.fourth.length; i++) {
        if(data.factory.fourth[i].status !== 0){  
            var dom = domTemplate('#index-factory-block','item-factory-template');
            dom.find('.item-factory-template-image').attr('src',data.factory.fourth[i].image);
            dom.find('.item-factory-template-title').text(data.factory.fourth[i].title);
            dom.find('.item-factory-template-des').text(data.factory.fourth[i].content);
            $('#index-factory-block').find('.item-factory-list').append(dom);
        }
    }
    $('#index-factory-block').find('.item-factory-template').remove();
    //factory end

    
}

// 前台 最新消息區塊
export let viewIndexNewsBlock = (data, items) => {
    console.log(data);
    var dataArr = [];
    //載入news list內容
    for(let n = 0; n < items; n++){
        console.log(n);
        console.log(112);
        var dom = domTemplate('#index-news-block','item-index-news-template');
        dom.data('id', data[n].id);
        dom.find('.item-index-news-template-link').attr('href',"/news/"+data[n].id);
        dom.find('.item-index-news-template-date').text(data[n].public_date);
        dom.find('.item-index-news-template-title').text(data[n].title);
        $('#index-news-block').find('.item-index-news-list').append(dom);
    }
    $('#index-news-block').find('.item-index-news-template').remove();
}

// 前台 聯絡我們區塊
export let viewIndexContactBlock = data => {
    $('#index-contact-block').find('#item-contact-title').text(data.title);
    $('#index-contact-block').find('.item-contact-subtitle').text(data.content);
    $('#index-contact-block').find('.item-contact-phone').text(data.phone);
    $('#index-contact-block').find('.item-contact-fax').text(data.fax);
    $('#index-contact-block').find('.item-contact-email').text(data.email);
    $('#index-contact-block').find('.item-contact-address').text(data.address);
}



//後台 資料回填
export let returnAdminIndexForm = (data) => {
    // 橫幅腰帶管理區塊
    $('#index-edit-title').val(data.info.title);
    $('#index-edit-content').val(data.info.content);
    $('#index-edit-item1-title').val(data.info.first[0].title);
    $('#index-edit-item1-content').val(data.info.first[0].content);
    isImageTitle(data.info.first[0].image_title, function loadImageInfo() {
        $("#index-edit-item1-icon-upload-image").append("<img src='"+data.info.first[0].image+"'>");
        $("#index-edit-item1-icon-upload-title").val(data.info.first[0].image_title);
        $("#index-edit-item1-icon-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.info.first[0].image_title);
        $('#index-edit-item1').find(".admin-radio-block, .admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    setRadioStatus($('#index-edit-item1'), data.info.first[0].status);

    $('#index-edit-item2-title').val(data.info.first[1].title);
    $('#index-edit-item2-content').val(data.info.first[1].content);
    isImageTitle(data.info.first[1].image_title, function loadImageInfo() {
        $("#index-edit-item2-icon-upload-image").append("<img src='"+data.info.first[1].image+"'>");
        $("#index-edit-item2-icon-upload-title").val(data.info.first[1].image_title);
        $("#index-edit-item2-icon-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.info.first[1].image_title);
        $('#index-edit-item2').find(".admin-radio-block, .admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    setRadioStatus($('#index-edit-item2'), data.info.first[1].status);

    $('#index-edit-item3-title').val(data.info.first[2].title);
    $('#index-edit-item3-content').val(data.info.first[2].content);
    isImageTitle(data.info.first[2].image_title, function loadImageInfo() {
        $("#index-edit-item3-icon-upload-image").append("<img src='"+data.info.first[2].image+"'>");
        $("#index-edit-item3-icon-upload-title").val(data.info.first[2].image_title);
        $("#index-edit-item3-icon-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.info.first[2].image_title);
        $('#index-edit-item3').find(".admin-radio-block, .admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    setRadioStatus($('#index-edit-item3'), data.info.first[2].status);

    // 關於我們管理區塊
    isImageTitle(data.about.second[0].image_title, function loadImageInfo() {
        $("#index-edit-about-picture1-upload-image").append("<img src='"+data.about.second[0].image+"'>");
        $("#index-edit-about-picture1-upload-title").val(data.about.second[0].image_title);
        $("#index-edit-about-picture1-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.about.second[0].image_title);
        $('#index-edit-about-picture1-block').find(".admin-radio-block, .admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });

    isImageTitle(data.about.second[1].image_title, function loadImageInfo() {
        $("#index-edit-about-picture2-upload-image").append("<img src='"+data.about.second[1].image+"'>");
        $("#index-edit-about-picture2-upload-title").val(data.about.second[1].image_title);
        $("#index-edit-about-picture2-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.about.second[1].image_title);
        $('#index-edit-about-picture2-block').find(".admin-radio-block, .admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    $("#index-edit-about-title").val(data.about.title);
    CKEDITOR.instances.indexeditaboutcontent.setData(data.about.content);


    // 服務項目管理區塊
    $("#index-edit-service-title").val(data.service.title);
    //服務項目1
    $("#index-edit-service-item1-title").val(data.service.third[0].title);
    $("#index-edit-service-item1-content").val(data.service.third[0].content);
    $("#index-edit-service-item1-link").val(data.service.third[0].link);
    isImageTitle(data.service.third[0].image_icon_title, function loadImageInfo() {
        $("#index-edit-service-item1-icon1-upload-image").append("<img src='"+data.service.third[0].image_icon+"'>");
        $("#index-edit-service-item1-icon1-upload-title").val(data.service.third[0].image_icon_title);
        $("#index-edit-service-item1-icon1-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.service.third[0].image_icon_title);
        $('#index-edit-service-item1-icon1-block').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    isImageTitle(data.service.third[0].image_title, function loadImageInfo() {
        $("#index-edit-service-item1-picture-upload-image").append("<img src='"+data.service.third[0].image+"'>");
        $("#index-edit-service-item1-picture-upload-title").val(data.service.third[0].image_title);
        $("#index-edit-service-item1-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.service.third[0].image_title);
        $('#index-edit-service-item1-picture-block').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    if(data.service.third[0].image_icon_title && data.service.third[0].image_title){
        setRadioStatus($('#index-edit-service-item1'), data.service.third[0].status);
        $('#index-edit-service-item1').find('.admin-radio-block').addClass('show');
    }
    //服務項目2
    $("#index-edit-service-item2-title").val(data.service.third[1].title);
    $("#index-edit-service-item2-content").val(data.service.third[1].content);
    $("#index-edit-service-item2-link").val(data.service.third[1].link);
    isImageTitle(data.service.third[1].image_icon_title, function loadImageInfo() {
        $("#index-edit-service-item2-icon1-upload-image").append("<img src='"+data.service.third[1].image_icon+"'>");
        $("#index-edit-service-item2-icon1-upload-title").val(data.service.third[1].image_icon_title);
        $("#index-edit-service-item2-icon1-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.service.third[1].image_icon_title);
        $('#index-edit-service-item2-icon1-block').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });

    isImageTitle(data.service.third[1].image_title, function loadImageInfo() {
        $("#index-edit-service-item2-picture-upload-image").append("<img src='"+data.service.third[1].image+"'>");
        $("#index-edit-service-item2-picture-upload-title").val(data.service.third[1].image_title);
        $("#index-edit-service-item2-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.service.third[1].image_title);
        $('#index-edit-service-item2-picture-block').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    if(data.service.third[1].image_icon_title && data.service.third[1].image_title){
        $('#index-edit-service-item2').find('.admin-radio-block').addClass('show');
        setRadioStatus($('#index-edit-service-item2'), data.service.third[1].status);
    }
    //服務項目3
    $("#index-edit-service-item3-title").val(data.service.third[2].title);
    $("#index-edit-service-item3-content").val(data.service.third[2].content);
    $("#index-edit-service-item3-link").val(data.service.third[2].link);
    isImageTitle(data.service.third[2].image_icon_title, function loadImageInfo() {
        $("#index-edit-service-item3-icon1-upload-image").append("<img src='"+data.service.third[2].image_icon+"'>");
        $("#index-edit-service-item3-icon1-upload-title").val(data.service.third[2].image_icon_title);
        $("#index-edit-service-item3-icon1-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.service.third[2].image_icon_title);
        $('#index-edit-service-item3-icon1-block').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    isImageTitle(data.service.third[2].image_title, function loadImageInfo() {
        $("#index-edit-service-item3-picture-upload-image").append("<img src='"+data.service.third[2].image+"'>");
        $("#index-edit-service-item3-picture-upload-title").val(data.service.third[2].image_title);
        $("#index-edit-service-item3-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.service.third[2].image_title);
        $('#index-edit-service-item3-picture-block').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    if(data.service.third[2].image_icon_title && data.service.third[2].image_title){
        $('#index-edit-service-item3').find('.admin-radio-block').addClass('show');
        setRadioStatus($('#index-edit-service-item3'), data.service.third[2].status);
    }
    //服務項目4
    $("#index-edit-service-item4-title").val(data.service.third[3].title);
    $("#index-edit-service-item4-content").val(data.service.third[3].content);
    $("#index-edit-service-item4-link").val(data.service.third[3].link);
    isImageTitle(data.service.third[3].image_icon_title, function loadImageInfo() {
        $("#index-edit-service-item4-icon1-upload-image").append("<img src='"+data.service.third[3].image_icon+"'>");
        $("#index-edit-service-item4-icon1-upload-title").val(data.service.third[3].image_icon_title);
        $("#index-edit-service-item4-icon1-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.service.third[3].image_icon_title);
        $('#index-edit-service-item4-icon1-block').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    isImageTitle(data.service.third[3].image_title, function loadImageInfo() {
        $("#index-edit-service-item4-picture-upload-image").append("<img src='"+data.service.third[3].image+"'>");
        $("#index-edit-service-item4-picture-upload-title").val(data.service.third[3].image_title);
        $("#index-edit-service-item4-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.service.third[3].image_title);
        $('#index-edit-service-item4-picture-block').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    if(data.service.third[3].image_icon_title && data.service.third[3].image_title){
        $('#index-edit-service-item4').find('.admin-radio-block').addClass('show');
        setRadioStatus($('#index-edit-service-item4'), data.service.third[3].status);
    }
    

    // 工廠介紹管理區塊
    $("#index-edit-factory-title").val(data.factory.title);
    $("#index-edit-factory-subtitle").val(data.factory.subtitle);
    $("#index-edit-factory-content").val(data.factory.content);
    isImageTitle(data.factory.image_title, function loadImageInfo() {
        $("#index-edit-factory-main-picture-upload-image").append("<img src='"+data.factory.image+"'>");
        $("#index-edit-factory-main-picture-upload-title").val(data.factory.image_title);
        $("#index-edit-factory-main-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.factory.image_title);
        $('#index-edit-factory-main-picture').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
    });
    //說明1
    $("#index-edit-factory-item1-title").val(data.factory.fourth[0].title);
    $("#index-edit-factory-item1-content").val(data.factory.fourth[0].content);
    isImageTitle(data.factory.fourth[0].image_title, function loadImageInfo() {
        $("#index-edit-factory-item1-picture-upload-image").append("<img src='"+data.factory.fourth[0].image+"'>");
        $("#index-edit-factory-item1-picture-upload-title").val(data.factory.fourth[0].image_title);
        $("#index-edit-factory-item1-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.factory.fourth[0].image_title);
        $('#index-edit-factory-item1').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
        $('#index-edit-factory-item1').find('.admin-radio-block').addClass('show');
    });
    setRadioStatus($('#index-edit-factory-item1'), data.factory.fourth[0].status);

    //說明2
    $("#index-edit-factory-item2-title").val(data.factory.fourth[1].title);
    $("#index-edit-factory-item2-content").val(data.factory.fourth[1].content);
    isImageTitle(data.factory.fourth[1].image_title, function loadImageInfo() {
        $("#index-edit-factory-item2-picture-upload-image").append("<img src='"+data.factory.fourth[1].image+"'>");
        $("#index-edit-factory-item2-picture-upload-title").val(data.factory.fourth[1].image_title);
        $("#index-edit-factory-item2-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.factory.fourth[1].image_title);
        $('#index-edit-factory-item2').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
        $('#index-edit-factory-item2').find('.admin-radio-block').addClass('show');
    });
    setRadioStatus($('#index-edit-factory-item2'), data.factory.fourth[1].status);

    //說明3
    $("#index-edit-factory-item3-title").val(data.factory.fourth[2].title);
    $("#index-edit-factory-item3-content").val(data.factory.fourth[2].content);
    isImageTitle(data.factory.fourth[2].image_title, function loadImageInfo() {
        $("#index-edit-factory-item3-picture-upload-image").append("<img src='"+data.factory.fourth[2].image+"'>");
        $("#index-edit-factory-item3-picture-upload-title").val(data.factory.fourth[2].image_title);
        $("#index-edit-factory-item3-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.factory.fourth[2].image_title);
        $('#index-edit-factory-item3').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
        $('#index-edit-factory-item3').find('.admin-radio-block').addClass('show');
    });
    setRadioStatus($('#index-edit-factory-item3'), data.factory.fourth[2].status);

    //說明4
    $("#index-edit-factory-item4-title").val(data.factory.fourth[3].title);
    $("#index-edit-factory-item4-content").val(data.factory.fourth[3].content);
    isImageTitle(data.factory.fourth[3].image_title, function loadImageInfo() {
        $("#index-edit-factory-item4-picture-upload-image").append("<img src='"+data.factory.fourth[3].image+"'>");
        $("#index-edit-factory-item4-picture-upload-title").val(data.factory.fourth[3].image_title);
        $("#index-edit-factory-item4-picture-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.factory.fourth[3].image_title);
        $('#index-edit-factory-item4').find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
        $('#index-edit-factory-item4').find('.admin-radio-block').addClass('show');
    });
    setRadioStatus($('#index-edit-factory-item4'), data.factory.fourth[3].status);
}

// 後台 抓取填寫資料
export let transferAdminIndexForm = () => {
    let aboutCkDom = CKEDITOR.instances.indexeditaboutcontent.getData();
    let imageReg = /base64/;
    let data = {
        info: {
            id: 1,
            title: $('#index-edit-title').val(),
            subtitle: "",
            content: $('#index-edit-content').val(),
            items: [
                {
                    id: 1,
                    title: $('#index-edit-item1-title').val(),
                    content: $('#index-edit-item1-content').val(),
                    image: imageReg.test($('#index-edit-item1').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-item1').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $("#index-edit-item1-icon-upload-title").val(),
                    image_title: $("#index-edit-item1-icon-upload-title").val(),
                    status: radioStatus("index_edit_item1")
                },
                {
                    id: 2,
                    title: $('#index-edit-item2-title').val(),
                    content: $('#index-edit-item2-content').val(),
                    image: imageReg.test($('#index-edit-item2').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-item2').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $("#index-edit-item2-icon-upload-title").val(),
                    image_title: $("#index-edit-item2-icon-upload-title").val(),
                    status: radioStatus("index_edit_item2")
                },{
                    id: 3,
                    title: $('#index-edit-item3-title').val(),
                    content: $('#index-edit-item3-content').val(),
                    image: imageReg.test($('#index-edit-item3').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-item3').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $("#index-edit-item3-icon-upload-title").val(),
                    image_title: $("#index-edit-item3-icon-upload-title").val(),
                    status: radioStatus("index_edit_item3")
                }
            ]
        },
        about: {
            id: 2,
            title: $('#index-edit-about-title').val(),
            subtitle: "",
            content: aboutCkDom,
            items: [
                {
                    id: 1,
                    image: imageReg.test($('#index-edit-about-picture1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-about-picture1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-about-picture1-upload-title').val(),
                    image_title: $('#index-edit-about-picture1-upload-title').val()
                },
                {
                    id: 2,
                    image: imageReg.test($('#index-edit-about-picture2-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-about-picture2-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-about-picture2-upload-title').val(),
                    image_title: $('#index-edit-about-picture2-upload-title').val()
                },
            ]
        },
        service: {
            id: 3,
            title: $("#index-edit-service-title").val(),
            subtitle: "",
            content: "",
            items: [
                {
                    id: 1,
                    title: $('#index-edit-service-item1-title').val(),
                    content: $('#index-edit-service-item1-content').val(),
                    image_icon: imageReg.test($('#index-edit-service-item1-icon1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-service-item1-icon1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_icon_alt: $('#index-edit-service-item1-icon1-upload-title').val(),
                    image_icon_title: $('#index-edit-service-item1-icon1-upload-title').val(),
                    image: imageReg.test($('#index-edit-service-item1-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-service-item1-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-service-item1-picture-upload-title').val(),
                    image_title: $('#index-edit-service-item1-picture-upload-title').val(),
                    link: $('#index-edit-service-item1-link').val(),
                    status: radioStatus("index-edit-service-item1")
                },
                {
                    id: 2,
                    title: $('#index-edit-service-item2-title').val(),
                    content: $('#index-edit-service-item2-content').val(),
                    image_icon: imageReg.test($('#index-edit-service-item2-icon1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-service-item2-icon1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_icon_alt: $('#index-edit-service-item2-icon1-upload-title').val(),
                    image_icon_title: $('#index-edit-service-item2-icon1-upload-title').val(),
                    image: imageReg.test($('#index-edit-service-item2-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-service-item2-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-service-item2-picture-upload-title').val(),
                    image_title: $('#index-edit-service-item2-picture-upload-title').val(),
                    link: $('#index-edit-service-item2-link').val(),
                    status: radioStatus("index-edit-service-item2")
                },
                {
                    id: 3,
                    title: $('#index-edit-service-item3-title').val(),
                    content: $('#index-edit-service-item3-content').val(),
                    image_icon: imageReg.test($('#index-edit-service-item3-icon1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-service-item3-icon1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_icon_alt: $('#index-edit-service-item3-icon1-upload-title').val(),
                    image_icon_title: $('#index-edit-service-item3-icon1-upload-title').val(),
                    image: imageReg.test($('#index-edit-service-item3-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-service-item3-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-service-item3-picture-upload-title').val(),
                    image_title: $('#index-edit-service-item3-picture-upload-title').val(),
                    link: $('#index-edit-service-item3-link').val(),
                    status: radioStatus("index-edit-service-item3")
                },
                {
                    id: 4,
                    title: $('#index-edit-service-item4-title').val(),
                    content: $('#index-edit-service-item4-content').val(),
                    image_icon: imageReg.test($('#index-edit-service-item4-icon1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-service-item4-icon1-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_icon_alt: $('#index-edit-service-item4-icon1-upload-title').val(),
                    image_icon_title: $('#index-edit-service-item4-icon1-upload-title').val(),
                    image: imageReg.test($('#index-edit-service-item4-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-service-item4-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-service-item4-picture-upload-title').val(),
                    image_title: $('#index-edit-service-item4-picture-upload-title').val(),
                    link: $('#index-edit-service-item4-link').val(),
                    status: radioStatus("index-edit-service-item4")
                }
            ]
        },
        factory: {
            id: 4,
            title: $('#index-edit-factory-title').val(),
            subtitle: $('#index-edit-factory-subtitle').val(),
            content: $('#index-edit-factory-content').val(),
            image: uploadImageCheck($("#index-edit-factory-main-picture-upload-image img").attr("src")),
            image_alt: "",
            image_title: $("#index-edit-factory-main-picture-upload-title").val(),
            items: [
                {
                    id: 1,
                    title: $('#index-edit-factory-item1-title').val(),
                    content: $('#index-edit-factory-item1-content').val(),
                    image: imageReg.test($('#index-edit-factory-item1-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-factory-item1-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-factory-item1-picture-upload-title').val(),
                    image_title: $('#index-edit-factory-item1-picture-upload-title').val(),
                    status: radioStatus("index-edit-factory-item1")
                },
                {
                    id: 2,
                    title: $('#index-edit-factory-item2-title').val(),
                    content: $('#index-edit-factory-item2-content').val(),
                    image: imageReg.test($('#index-edit-factory-item2-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-factory-item2-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-factory-item2-picture-upload-title').val(),
                    image_title: $('#index-edit-factory-item2-picture-upload-title').val(),
                    status: radioStatus("index-edit-factory-item2")
                },
                {
                    id: 3,
                    title: $('#index-edit-factory-item3-title').val(),
                    content: $('#index-edit-factory-item3-content').val(),
                    image: imageReg.test($('#index-edit-factory-item3-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-factory-item3-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-factory-item3-picture-upload-title').val(),
                    image_title: $('#index-edit-factory-item3-picture-upload-title').val(),
                    status: radioStatus("index-edit-factory-item3")
                },
                {
                    id: 4,
                    title: $('#index-edit-factory-item4-title').val(),
                    content: $('#index-edit-factory-item4-content').val(),
                    image: imageReg.test($('#index-edit-factory-item4-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src')) ? $('#index-edit-factory-item4-picture-upload').closest('.admin-image-block').find('.imgae-upload__picture img').attr('src') : "",
                    image_alt: $('#index-edit-factory-item4-picture-upload-title').val(),
                    image_title: $('#index-edit-factory-item4-picture-upload-title').val(),
                    status: radioStatus("index-edit-factory-item4")
                }
            ]
        }
    }

    return data;
}