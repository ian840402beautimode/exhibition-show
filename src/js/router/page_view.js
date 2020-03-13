// 控制層
import { viewPath } from './path.js';

//---- 後台 -----//
// 主頁
import { adminDashboardPage } from '../page/admin-dashboard.js';


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

    // 後台 主頁
    case viewPath.adminDashboard.dev.test(localUrlPath) || viewPath.adminDashboard.pro.test(localUrlPath): 
        adminDashboardPage();
        break;
}