import './pluging';
import './page_view.js';
import './controller/form/login.js';



// 讀取為使用到的圖片
var requireContext = require.context("../images", true, /^\.\/.*\.png$|^\.\/.*\.jp?g$|/);
requireContext.keys().map(requireContext);