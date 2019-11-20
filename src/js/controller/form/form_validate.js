//驗證表單
export function formValidate(formName, rulesObj, messagesObj, submitEvent){
    //將form字串轉物件
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    formName.find('.admin-form-button').click(function(){
        formName.validate({
            rules: rulesObj,
            messages: messagesObj,
            submitHandler:function(){
                if(submitEvent != null){
                    submitEvent();
                }
            },
            errorPlacement: function(error, element) {
                element.after(error);
            },
            errorClass: "error-message"   
        })
    });
}


// //網站系統管理

//     //網站資訊管理
//     formValidate($('#backend-system-edit-block'),{
//         seoKeyword: "required",
//         customerMail: {
//             required: true,
//             email: true
//         }
//     },{
//         seoKeyword: "請輸入關鍵字",
//         customerMail: {
//             required: "請輸入客服電子郵件",
//             email: "請輸入正確電子信箱格式"
//         }
//     });

// //聯絡我們管理-內容管理
// formValidate($('#backend-contact-edit-block'),{
//     phone: "required",
//     fax: "required",
//     email: {
//         required: true,
//         email: true
//     },
//     address: "required"
// },{
//     phone: "請輸入電話",
//     fax: "請輸入傳真",
//     email: {
//         required: "請輸入信箱",
//         email: "請輸入正確信箱格式"
//     },
//     address: "請輸入地址"
// });

//最新消息管理-內容管理
// formValidate($('#backend-news-edit-block'),{
//     title: "required",
// },{
//     title: "請輸入標題",
// });

// //工廠介紹管理-內容管理
// formValidate($('#backend-factory-edit-block'),{
//     factory_device_title: "required",
//     factory_laboratory_title: "required",
//     factory_skill_title: "required",
//     factory_security_title: "required",
//     factory_security_description1: "required",
//     factory_security_description2: "required",
//     factory_security_description3: "required",
//     factory_security_description4: "required",
//     factory_security_description5: "required",
//     factory_security_description6: "required"
// },{
//     factory_device_title: "請輸入標題",
//     factory_laboratory_title: "請輸入標題",
//     factory_skill_title: "請輸入標題",
//     factory_security_title: "請輸入標題",
//     factory_security_description1: "請輸入輔助文字",
//     factory_security_description2: "請輸入輔助文字",
//     factory_security_description3: "請輸入輔助文字",
//     factory_security_description4: "請輸入輔助文字",
//     factory_security_description5: "請輸入輔助文字",
//     factory_security_description6: "請輸入輔助文字"
// });

// //服務項目管理-內容管理
// formValidate($('#backend-service-edit-block'),{
//     service_prototype_title: "required",
//     service_prototype_item1_title: "required",
//     service_prototype_item2_title: "required",
//     service_prototype_item3_title: "required",
//     service_prototype_item4_title: "required",
//     service_prototype_item5_title: "required",
//     service_machining_title: "required",
//     service_machining_item1_title: "required",
//     service_machining_item2_title: "required",
//     service_machining_item3_title: "required",
//     service_machining_item4_title: "required",
//     service_machining_item5_title: "required",
//     service_machining_item6_title: "required",
//     service_skill1_title: "required",
//     service_skill1_subtitle: "required",
//     service_skill2_title: "required",
//     service_skill2_subtitle: "required"
// },{
//     service_prototype_title: "請輸入標題",
//     service_prototype_item1_title: "請輸入標題",
//     service_prototype_item2_title: "請輸入標題",
//     service_prototype_item3_title: "請輸入標題",
//     service_prototype_item4_title: "請輸入標題",
//     service_prototype_item5_title: "請輸入標題",
//     service_machining_title: "請輸入標題",
//     service_machining_item1_title: "請輸入標題",
//     service_machining_item2_title: "請輸入標題",
//     service_machining_item3_title: "請輸入標題",
//     service_machining_item4_title: "請輸入標題",
//     service_machining_item5_title: "請輸入標題",
//     service_machining_item6_title: "請輸入標題",
//     service_skill1_title: "請輸入標題",
//     service_skill1_subtitle: "請輸入標題",
//     service_skill2_title: "請輸入標題",
//     service_skill2_subtitle: "請輸入標題"
// });

// //關於我們管理-內容管理
// formValidate($('#backend-about-edit-block'),{
//     about_info_title: "required",
//     about_task_title: "required",
//     about_security_title: "required",
//     about_flow_title: "required"
// },{
//     about_info_title: "請輸入標題",
//     about_task_title: "請輸入標題",
//     about_security_title: "請輸入標題",
//     about_flow_title: "請輸入標題"
// });

// //首頁管理
//     //首頁輪播管理-編輯
//     formValidate($('#backend-slideshow-edit-block'),{
//         slideshow_edit_title: "required",
//         slideshow_edit_subtitle: "required"
//     },{
//         slideshow_edit_title: "請輸入標題",
//         slideshow_edit_subtitle: "請輸入標題"
//     });
//     //內容管理
//     formValidate($('#backend-index-edit-block'),{
//         index_edit_title: "required",
//         index_edit_item1_title: "required",
//         index_edit_item2_title: "required",
//         index_edit_item3_title: "required",
//         index_edit_about_title: "required",
//         index_edit_service_item1_title: "required",
//         index_edit_service_item2_title: "required",
//         index_edit_service_item3_title: "required",
//         index_edit_service_item4_title: "required",
//         index_edit_factory_title: "required",
//         index_edit_factory_item1_title: "required",
//         index_edit_factory_item2_title: "required",
//         index_edit_factory_item3_title: "required",
//         index_edit_factory_item4_title: "required",
//     },{
//         index_edit_title: "請輸入標題",
//         index_edit_item1_title: "請輸入標題",
//         index_edit_item2_title: "請輸入標題",
//         index_edit_item3_title: "請輸入標題",
//         index_edit_about_title: "請輸入標題",
//         index_edit_service_item1_title: "請輸入標題",
//         index_edit_service_item2_title: "請輸入標題",
//         index_edit_service_item3_title: "請輸入標題",
//         index_edit_service_item4_title: "請輸入標題",
//         index_edit_factory_title: "請輸入標題",
//         index_edit_factory_item1_title: "請輸入標題",
//         index_edit_factory_item2_title: "請輸入標題",
//         index_edit_factory_item3_title: "請輸入標題",
//         index_edit_factory_item4_title: "請輸入標題",
//     }, editIndexForm);