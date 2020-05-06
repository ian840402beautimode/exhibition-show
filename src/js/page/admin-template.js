// 資料
import { viewAdminHeader } from './model/global.js';
import { templateData } from '../data/template.js';
import { viewAdminTemplateList, returnTemplateForm, transferTemplateForm } from './model/template.js';

// 功能
import { formValidate } from '../global/form/form_validate';
import { adminListTables, adminListTableClickActive } from '../global/backend/admin-table.js';
import { adminInputTimnepickerYMDH } from '../global/backend/admin-timepicker';
import { excelUplaod } from '../global/backend/admin-excel-upload';
import { adminSort } from '../global/backend/admin-sort.js';
import { ckEditorEvent } from '../global/backend/admin-ckeditor.js';
import { listCheckboxClick } from '../global/backend/event-list-show-hide-delete-button.js';
import { creatSuccess, editSuccess, deleteSuccess } from '../global/common/sweetalert.js';
import { imageUploadPriview } from '../global/backend/admin-image-upload.js';

export const adminTemplatePage = () =>{
    viewAdminHeader("主頁");
    if (templateData.length > 0) {
        $('#admin-template-list').addClass('_show');
        viewAdminTemplateList(templateData);
        adminListTables('#admin-template-list',[2,7])
        adminListTableClickActive();
        listCheckboxClick();
    }else{
        $("#admin-template-list").hide();
        $(".table-list-wrapper").append("<div class='no-article'>目前沒有相關內容<div>");
    }

    //刪除文章
    // $("table").on("click",".item-controller__delete",function(e){
    //     let id = $(this).find("a").data('id');
    //     console.log(id);
    //     e.preventDefault();
    //     let serviceClassListDelete = () => {
    //         apiServiceClassListDelete(id).then(result => {
    //             console.log(result);
    //         }).catch(err => {
    //             console.log(err)
    //         });
    //     }

    //     deleteSuccess(serviceClassListDelete);
    // });

    // 圖片上傳
    imageUploadPriview($('#admin-edit-upload'));

    // ckeditor
    ckEditorEvent('editckdom');
    
    // date input click
    adminInputTimnepickerYMDH('#edit-input-date');

    // excel 上傳
    excelUplaod('#admin-edit-block','excel_btn');

    // excel 確認送出按鈕
    $('#admin-edit-block').on('click','#excel-send',function(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append('list', $('input[name="excel_btn"]')[0].files[0]); 
        console.log(formData);
        creatSuccess();
    });

    // 資料回填
    returnTemplateForm(templateData[0]);


    //--- 資料抓取 ---//
    let formEdit = () =>{
        let data = transferTemplateForm();
        console.log(data);
        // editSuccess();
    }

    // 資料抓取-欄位驗證
    formValidate($('#admin-edit-block'),{
        edit_input1: "required",
    },{
        edit_input1: "請輸入標題",
    },formEdit);
}