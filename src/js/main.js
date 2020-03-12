
// 後台功能
import './global/backend/window-resize.js';
import './global/backend/sidebar.js';

//讀取為使用到的圖片
var requireContext = require.context("../images", true, /^\.\/.*\.png$|^\.\/.*\.jp?g$|/);
requireContext.keys().map(requireContext);