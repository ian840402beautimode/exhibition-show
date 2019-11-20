// 控制層
import { viewPath } from './path.js';

import { indexPage } from './controller/page/index.js';
import { adminIndexEditPage } from './controller/page/admin-index.js';
import { adminSystemEditPage } from './controller/page/admin-system.js';


let localUrlPath = location.pathname;

localUrlPath = localUrlPath.replace("/","");

//  View & controller
switch (true) {     // 前台頁面
    case /^index/.test(localUrlPath)||localUrlPath === "":       //首頁
        // indexPage();
        break;

    // 後台頁面
    case viewPath.adminLogin.dev.test(localUrlPath) || viewPath.adminLogin.pro.test(localUrlPath): //後台 登入頁面
        // Do nothing....
        break;
    case viewPath.adminIndexEdit.dev.test(localUrlPath) || viewPath.adminIndexEdit.pro.test(localUrlPath): //後台 首頁管理頁面
        // adminIndexEditPage();
        break;
    case viewPath.adminSystem.dev.test(localUrlPath) || viewPath.adminSystem.pro.test(localUrlPath): //後台 網站系統管理頁面
        // adminSystemEditPage();
        break;
}