import './pluging';
import './router/page_view.js';
import './global/form/login.js';

// 後台功能
import './global/backend/window-resize.js';
import './global/backend/sidebar.js';
import './global/backend/event-slide.js';

//讀取為使用到的圖片
var requireContext = require.context("../images", true, /^\.\/.*\.png$|^\.\/.*\.jp?g$|/);
requireContext.keys().map(requireContext);