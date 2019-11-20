// // 資料
// import { apiSystemGet, apiIndexGet, apiIndexUpdate} from '../../model/api.js';
// import { viewAdminHeader } from '../../model/page/global.js';
// import { returnAdminIndexForm, transferAdminIndexForm } from '../../model/page/index.js';

// // 功能
// import { formValidate } from '../../controller/form/form_validate';
// import { ckEditorEvent } from '../../controller/backend/admin-ckeditor.js';
// import { editSuccess } from '../../controller/common/sweetalert.js';

// export let adminIndexEditPage = () => {

//     // 資料回填
//     Promise.all([apiIndexGet(),apiSystemGet()]).then(result => {
//         console.log(result[0].data);
//         ckEditorEvent('indexeditaboutcontent');
//         viewAdminHeader("首頁管理",result[1].data);
//         returnAdminIndexForm(result[0].data);
//     }).catch(err => {
//         console.log(err);
//     })

//     // 資料抓取
//     let indexEdit = () => {
//         let data = transferAdminIndexForm();
//         console.log(data);

//         Promise.all([apiIndexUpdate(1,data.info),apiIndexUpdate(2,data.about),apiIndexUpdate(3,data.service),apiIndexUpdate(4,data.factory)]).then(result => {
//             editSuccess();
//         }).catch(err => {
//             console.log(err);
//         });
//     }

//     // 送出資料
//     formValidate($('#backend-index-edit-block'),{
//         // index_edit_title: "required",
//         // index_edit_item1_title: "required",
//         // index_edit_item2_title: "required",
//         // index_edit_item3_title: "required",
//         // index_edit_about_title: "required",
//         // index_edit_service_item1_title: "required",
//         // index_edit_service_item2_title: "required",
//         // index_edit_service_item3_title: "required",
//         // index_edit_service_item4_title: "required",
//         // index_edit_factory_title: "required",
//         // index_edit_factory_item1_title: "required",
//         // index_edit_factory_item2_title: "required",
//         // index_edit_factory_item3_title: "required",
//         // index_edit_factory_item4_title: "required",
//     },{
//         // index_edit_title: "請輸入標題",
//         // index_edit_item1_title: "請輸入標題",
//         // index_edit_item2_title: "請輸入標題",
//         // index_edit_item3_title: "請輸入標題",
//         // index_edit_about_title: "請輸入標題",
//         // index_edit_service_item1_title: "請輸入標題",
//         // index_edit_service_item2_title: "請輸入標題",
//         // index_edit_service_item3_title: "請輸入標題",
//         // index_edit_service_item4_title: "請輸入標題",
//         // index_edit_factory_title: "請輸入標題",
//         // index_edit_factory_item1_title: "請輸入標題",
//         // index_edit_factory_item2_title: "請輸入標題",
//         // index_edit_factory_item3_title: "請輸入標題",
//         // index_edit_factory_item4_title: "請輸入標題",
//     }, indexEdit);
// };