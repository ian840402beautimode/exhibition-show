import { radioStatus, setRadioStatus } from '../../global/form/radio_check_status.js';
import { numberWithCommas } from '../../global/common/number-with-commas.js';
import { uploadImageCheck } from '../../global/common/upload-file-check.js';
import { isImageTitle } from '../../global/common/return-is-image-title.js';

// 列表
export const viewAdminTemplateList = (data) =>{
    let tableDom = $("#admin-template-list").find("tbody tr");

    for (let i = 1; i < data.length; i++) {
        $("#admin-template-list").find("tbody").append(tableDom.clone());
    }

    $("#admin-template-list").find("tbody tr").each(function(index, element){
        $(element).data('id', data[index].id);
        $(element).find("td:nth-child(1) .admin-item-checkbox").addClass('item-checkbox').attr("data-id",data[index].id);
        if(index < 9){
            $(element).find("td:nth-child(2)").text('0' + (index + 1));   
        }else{
            $(element).find("td:nth-child(2)").text(index + 1);
        }
        $(element).find("td:nth-child(3) input").val(data[index].sort).attr("data-id",data[index].id);
        $(element).find("td:nth-child(4)").text(data[index].title);
        if (data[index].status === 1) {
            $(element).find("td:nth-child(5)").append("<span class='show'>顯示</span>");
        } else {
            $(element).find("td:nth-child(5)").append("<span class='hide'>隱藏</span>");
        }
        $(element).find("td:nth-child(6)").text(numberWithCommas('NT: ' + data[index].price));
        $(element).find("td:nth-child(7) .admin-item-scan-block__num").text(data[index].total);
        $(element).find("td:nth-child(7) .admin-item-scan-block__button").attr("href","/");
        $(element).find(".item-controller__delete a").data('id',data[index].id);
        $(element).find(".item-controller__edit a").attr("href","/" + data[index].id);
    })
}

// 取得資料
export const transferTemplateForm = () =>{
    let adminCkdom = CKEDITOR.instances.editckdom.getData();
    let data = {
        status: radioStatus("radio"),
        content: adminCkdom,
        image: uploadImageCheck($('#admin-edit-image img').attr('src'))
    }
    return data;
}

// 回填資料
export const returnTemplateForm = (data) =>{
    setRadioStatus($("#admin-edit-block"), data.status);
    CKEDITOR.instances.editckdom.setData(data.content);
    isImageTitle(data.image_title, function loadImageInfo(){
        $("#admin-edit-block").find(".admin-item-block__content__image-upload,.controller__info").addClass("show");
        $("#admin-edit-image").append("<img src='"+ data.image +"'>");
        $('#admin-edit-upload-title').val(data.image_title);
        $("#admin-edit-upload").parents(".controller").find('.info__content').text(data.image_title);
    });
}