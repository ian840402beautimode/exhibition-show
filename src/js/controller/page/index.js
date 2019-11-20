// // 資料
// import { apiIndexGet, apiSlideshowGet, apiNewsGet, apiContactGet, apiWebformPost, apiSystemGet} from '../../model/api.js';
// import { viewSlideshow } from '../../model/page/slideshow.js';
// import { viewIndexPage, viewIndexNewsBlock, viewIndexContactBlock } from '../../model/page/index.js'
// import { transferWebformForm } from '../../model/page/webform.js';
// import { frontendPageInfo } from '../../model/page/global.js';

// // 功能
// import { indexContactValidate } from '../../controller/form/contact_form.js';
// import { submitSuccess } from '../../controller/common/sweetalert.js';

// export let indexPage = () => {
//     // 產生頁面
//     Promise.all([apiIndexGet(),apiSlideshowGet(),apiNewsGet(),apiContactGet(),apiSystemGet()]).then(result =>{
//         console.log(result[2].data);
//         frontendPageInfo("飛碩官方網站",result[4].data,result[3].data);
//         viewSlideshow(result[1].data);
//         viewIndexPage(result[0].data);
//         if (result[2].data.length !== 0) {
//             viewIndexNewsBlock(result[2].data,6);
//             $("#index-news-block").find(".item-index-news-list").addClass("show");
//         } else {
//             $("#index-news-block").find(".item-index-news-list").hide();
//             $("#index-news-block").find(".news__content-wrapper").append("<div class='no-article'>目前沒有相關文章</div>");
//         }
//         viewIndexContactBlock(result[3].data[0]);
//     }).catch(err => {
//         console.log(err);
//     })

//     // 送出表單
//     let webformAdd = () => {
//         let data = transferWebformForm();
//         apiWebformPost(data).then(result =>{
//             submitSuccess();
//         }).catch(err=>{
//             console.log(err);
//         })
//     }

//     indexContactValidate(webformAdd);

// }