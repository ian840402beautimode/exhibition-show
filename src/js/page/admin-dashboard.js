// 資料
import { viewAdminHeader } from './model/global.js';

// 功能
import { adminListTables, adminListTableClickActive } from '../global/backend/admin-table.js';
import { listCheckboxClick } from '../global/backend/event-list-show-hide-delete-button.js';

export const adminDashboardPage = () =>{
    viewAdminHeader("主頁");
    $('#admin-list').addClass('_show');
    adminListTables('#admin-list',[2,8])
    adminListTableClickActive();
    listCheckboxClick();
}