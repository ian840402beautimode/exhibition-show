// 控制層
import { viewPath } from './path.js';

let localUrlPath = location.pathname;
localUrlPath = localUrlPath.replace("/","");
//  View & controller
switch (true) {     // 前台頁面
    case /^index/.test(localUrlPath)||localUrlPath === "":       //首頁
        // indexPage();
        break;

    // 後台頁面

    // 後台 登入頁面
    case viewPath.adminLogin.dev.test(localUrlPath):
        // Do nothing....
        break;

    // 後台 首頁
    // case viewPath.adminMain.dev.test(localUrlPath) || viewPath.adminMain.pro.test(localUrlPath): 
    //     adminMainPage();
    //     break;
}