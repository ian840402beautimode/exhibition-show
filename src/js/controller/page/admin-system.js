// // 資料
// import { apiSystemGet, apiSystemUpdate } from '../../model/api.js';
// import { returnAdminSystemFrom, transferAdminSystemForm } from '../../model/page/system.js'
// import { viewAdminHeader } from '../../model/page/global.js';

// // 功能
// import { formValidate } from '../../controller/form/form_validate.js';
// import { editSuccess } from '../../controller/common/sweetalert.js';

// export let adminSystemEditPage = () => {
    
//     apiSystemGet().then(result => {
//         viewAdminHeader("網站系統管理",result.data);
//         returnAdminSystemFrom(result.data);
//     }).catch(err =>{
//         console.log(err);
//     })

//     let systemEdit = () => {
//         let data = transferAdminSystemForm();
//         Promise.all([apiSystemUpdate(1,data.logo),apiSystemUpdate(2,data.icon),apiSystemUpdate(3,data.seoData),apiSystemUpdate(4,data.mailData)]).then(result => {
//             editSuccess();
//         }).catch(err =>{
//             console.log(err);
//         })
//     }

//     formValidate($('#backend-system-edit-block'),{
//         backend_system_edit_logo_upload: "required",
//         backend_system_edit_icon_upload: "required",
//         seoKeyword: "required",
//         customerMail: {
//             required: true,
//             email: true
//         },
//         customerPassword: "required",
//     },{
//         backend_system_edit_logo_upload: "請上傳網站Logo",
//         backend_system_edit_icon_upload: "請上傳網站icon",
//         seoKeyword: "請輸入關鍵字",
//         customerMail: {
//             required: "請輸入客服電子郵件",
//             email: "請輸入正確電子信箱格式"
//         },
//         customerPassword: "請輸入電子郵件密碼"
//     },systemEdit);
// }